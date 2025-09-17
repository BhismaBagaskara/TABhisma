import { PlaceHolderImages } from "@/lib/placeholder-images";
import DeadlineSuggester from "../dashboard/DeadlineSuggester";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
    const userAvatar = PlaceHolderImages.find(img => img.id === 'user-avatar');
    
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold tracking-tight text-primary font-headline">
                        TABhisma
                    </span>
                </a>
                <div className="flex items-center gap-4">
                    <DeadlineSuggester />
                    <Avatar className="h-9 w-9">
                        {userAvatar && (
                           <AvatarImage src={userAvatar.imageUrl} alt={userAvatar.description} data-ai-hint={userAvatar.imageHint} />
                        )}
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
};

export default Header;
