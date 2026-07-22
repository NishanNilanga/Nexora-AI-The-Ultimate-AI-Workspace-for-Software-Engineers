"use client";

import { useEffect, useRef, useState } from "react";

import api from "../services/api";
import toast from "react-hot-toast";

import ChatMessage from "./ChatMessage";

import {
  Bot,
  SendHorizontal,
  Sparkles,
  Trash2,
  LoaderCircle,
  Copy,
} from "lucide-react";

export default function AIAssistant() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const suggestions = [
    "Summarize my projects",
    "Which tasks are overdue?",
    "Suggest today's priorities",
    "Generate weekly report",
  ];

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  const askAI = async (text = message) => {

    if (!text.trim()) {

      toast.error("Please enter a message.");

      return;

    }

    const userMessage = {

      role: "user",

      content: text,

    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const res = await api.post("/ai", {

        message: text,

      });

      const aiMessage = {

        role: "assistant",

        content: res.data.reply,

      };

      setMessages((prev) => [...prev, aiMessage]);

      setMessage("");

    } catch (error) {

      console.log(error);

      toast.error("AI request failed.");

    } finally {

      setLoading(false);

    }

  };

  const copyReply = async () => {

    const lastAI = [...messages]

      .reverse()

      .find((m) => m.role === "assistant");

    if (!lastAI) return;

    await navigator.clipboard.writeText(lastAI.content);

    toast.success("Copied to clipboard");

  };

  const clearChat = () => {

    setMessages([]);

    setMessage("");

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();

      askAI();

    }

  };

  return (
    <div className="mt-10 rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">

      {/* ================= Header ================= */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">

            <Bot
              size={34}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              Nexora AI
            </h2>

            <p className="mt-1 text-slate-400">
              Your intelligent productivity assistant.
            </p>

          </div>

        </div>

        {messages.length > 0 && (

          <button
            onClick={clearChat}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 font-semibold transition hover:bg-red-700"
          >
            <Trash2 size={18} />
            Clear
          </button>

        )}

      </div>

      {/* ================= Suggestions ================= */}

      <div className="mt-8">

        <h3 className="mb-4 flex items-center gap-2 font-semibold text-cyan-400">

          <Sparkles size={18} />

          Suggested Prompts

        </h3>

        <div className="grid gap-3 md:grid-cols-2">

          {suggestions.map((item) => (

            <button
              key={item}
              onClick={() => askAI(item)}
              className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-left transition hover:border-cyan-500 hover:bg-slate-700"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* ================= Chat ================= */}

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900">

        <div className="h-[500px] overflow-y-auto p-6">

          {messages.length === 0 && (

            <div className="flex h-full flex-col items-center justify-center text-center">

              <Bot
                size={60}
                className="mb-5 text-cyan-400"
              />

              <h3 className="text-2xl font-bold text-white">
                Nexora AI Assistant
              </h3>

              <p className="mt-3 max-w-lg text-slate-400">
                Ask anything about your projects,
                MERN Stack,
                software engineering,
                debugging,
                productivity or planning.
              </p>

            </div>

          )}

          {messages.map((msg, index) => (

            <ChatMessage
              key={index}
              role={msg.role}
              content={msg.content}
            />

          ))}

          {loading && (

            <div className="mb-6 flex">

              <div className="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4">

                <div className="mb-2 font-semibold">
                  🤖 Nexora AI
                </div>

                <div className="flex items-center gap-3">

                  <LoaderCircle
                    size={18}
                    className="animate-spin text-cyan-400"
                  />

                  <span className="text-slate-300">
                    Thinking...
                  </span>

                </div>

              </div>

            </div>

          )}

          <div ref={chatEndRef}></div>

        </div>

      </div>

      {/* ================= Input ================= */}

      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Nexora AI anything..."
        className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-800 p-5 text-white outline-none transition focus:border-cyan-500"
      />

      <div className="mt-5 flex flex-wrap gap-4">

        <button
          onClick={() => askAI()}
          disabled={loading}
          className="flex items-center gap-3 rounded-xl bg-cyan-600 px-7 py-3 font-semibold transition hover:bg-cyan-700 disabled:opacity-60"
        >

          {loading ? (

            <>

              <LoaderCircle
                size={18}
                className="animate-spin"
              />

              Thinking...

            </>

          ) : (

            <>

              <SendHorizontal size={18} />

              Ask AI

            </>

          )}

        </button>

        {messages.length > 0 && (

          <button
            onClick={copyReply}
            className="flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-3 transition hover:bg-slate-700"
          >

            <Copy size={18} />

            Copy Last Reply

          </button>

        )}

      </div>

    </div>
  );
}
