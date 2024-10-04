import { socket } from "@/utils/socket";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

interface Message {
  sender: string;
  content: string;
}

const ChatBox = ({
  userId,
  userName,
}: {
  userId: string | undefined;
  userName: string;
}) => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    socket.emit("sendMessage", { sender: userId, content: message });

    setMessage("");
  };

  useEffect(() => {
    socket.on("receiveMessage", (data: { sender: string; content: string }) => {
      const newMessage: Message = {
        sender: data.sender,
        content: data.content,
      };

      setChatHistory((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  return (
    <div className="flex flex-col h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center p-3 bg-blue-500 text-white">
        <Avatar size="large" icon={<UserOutlined />} />
        <span className="ml-3 font-bold text-lg">{userName}</span>
      </div>

      <div className="flex flex-col flex-grow p-3 space-y-3 overflow-y-auto">
        {chatHistory.map((item, index) => (
          <div
            key={index}
            className={`${
              item.sender === userId
                ? "self-end bg-blue-500 text-white"
                : "self-start bg-gray-200 text-black"
            } rounded-xl px-4 py-2 max-w-[70%]`}
          >
            <Tooltip title={item.sender} placement="top">
              <span>{item.content}</span>
            </Tooltip>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="flex items-center p-3 border-t border-gray-300">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          onPressEnter={handleSendMessage}
          className="rounded-full flex-grow"
        />
        <Button
          type="primary"
          shape="circle"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
          className="ml-2"
        />
      </div>
    </div>
  );
};

export default ChatBox;
