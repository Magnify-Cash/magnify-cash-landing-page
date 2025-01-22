import { MessageSquare } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const CommunityWidget = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg animate-[bounce_3s_infinite] text-sm sm:text-base">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Join our community!</span>
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-[280px] sm:w-80 p-4">
          <div className="space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Connect with us!</h4>
            <div className="space-y-2">
              <a
                href="https://t.me/magnifycommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm sm:text-base"
              >
                Join us on Telegram
              </a>
              <a
                href="https://discord.gg/magnifycash"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-sm sm:text-base"
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