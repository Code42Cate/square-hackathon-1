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
import { PlusIcon } from "lucide-react";

export function CreateCampaignButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="row-start-2 flex h-48 flex-col items-center justify-center rounded-lg border border-gray-400 transition-all hover:scale-105">
          <PlusIcon size={32} className="text-gray-400" />

          <div className="text-gray-700">Start your dream</div>
        </div>
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
