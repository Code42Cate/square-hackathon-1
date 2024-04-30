import { Button } from "@ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/dialog";
import { Input } from "@ui/components/input";
import { Textarea } from "@ui/components/textarea";

import { Label } from "@ui/components/label";

export function CreateCampaignButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="hover:scale-102 h-10 cursor-pointer rounded-full border border-gray-500 px-2 py-1 text-xs leading-tight text-gray-700 hover:border-gray-700 hover:text-gray-900 hover:no-underline hover:transition-all md:text-base"
        >
          Create Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create Campain</DialogTitle>
          <DialogDescription>
            Create a new campaign for your neighboord. After creating a
            campaign, we will manually review it before it goes live.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Playground for Ducks"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Username
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="jonas.scholz@bbscholz.de"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pictures" className="text-right">
              Pictures
            </Label>
            <Input type="file" id="pictures" className="w-max" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              rows={10}
              placeholder="jonas.scholz@bbscholz.de"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Change 🚀</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
