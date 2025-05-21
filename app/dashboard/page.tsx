import { AppSidebar } from "@/components/app-sidebar";
// import { DataTable } from "@/components/data-table"
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableDemo } from "@/components/data-table";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            <div className="w-full flex justify-center mt-4">
              <h1 className="text-center font-bold text-3xl">Articles</h1>
            </div>
            <div className="w-full flex justify-center mt-4">
              <Tabs defaultValue="article1" className="w-[600px]">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger
                    value="article1"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Generated Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="article2"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Published Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="article3"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Scheduled Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="article4"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Archived Articles
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="tavle mt-6">
              <TableDemo />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
