import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          My Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your account information and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src="https://picsum.photos/100"
                alt="User avatar"
                data-ai-hint="user avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">Alex Doe</h2>
              <p className="text-muted-foreground">alex.doe@example.com</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Alex Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Registered Address</Label>
              <Input id="address" defaultValue="123 Main St, Anytown, USA 12345" />
              <p className="text-xs text-muted-foreground">
                This is used to personalize your election information.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Notification Preferences</h3>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="election-reminders">Election Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about upcoming elections and registration
                  deadlines.
                </p>
              </div>
              <Switch id="election-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="news-updates">Civic News Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive occasional updates on local civic news.
                </p>
              </div>
              <Switch id="news-updates" />
            </div>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
