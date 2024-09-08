"use client";
export default function Layout({ 
    children,
    analytics,
    revenue,
    notifications

}: { children: React.ReactNode;
    analytics: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    
 }) {
    return (
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{analytics}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </>
    );
}
        