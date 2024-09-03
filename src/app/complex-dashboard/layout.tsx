import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/RevenueMetrics";
import Notifications from "@/components/Notifications";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>{children}</div>
            <UserAnalytics />
            <RevenueMetrics />
            <Notifications />
        </>
    );
}
        