import { MessageSquare } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const CommunityWidget = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg animate-bounce">
            <MessageSquare className="w-5 h-5" />
            Join our community!
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-4">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect with us!</h4>
            <div className="space-y-2">
              <a
                href="https://t.me/magnifycash"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                Join us on Telegram
              </a>
              <a
                href="https://discord.gg/magnifycash"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
              >
                Join our Discord server
              </a>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default CommunityWidget;