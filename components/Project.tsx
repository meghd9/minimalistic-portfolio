import { Badge } from "@/components/ui/badge";

export const Project = () => (
  <div className="w-full pb-20 lg:pb-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Projects</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Something new!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Some of my creations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight">Library System</h3>
            <p className="text-muted-foreground text-base">
              A simple library system using Java.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight">Software Developer Portfolio</h3>
            <p className="text-muted-foreground text-base">
              A modern developer portfolio using NextJS.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight">Self directed learning</h3>
            <p className="text-muted-foreground text-base">
              A self-directed learning application using MERN stack.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight">Project 4</h3>
            <p className="text-muted-foreground text-base">
              Some info about project 4.
            </p>
          </div>
          {/* <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-muted-foreground text-base">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);