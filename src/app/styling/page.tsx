import SimpleGraph from '../newgraph/page';
import '../style.css'

export default async function UserPage() {
    async function getdata(){
      
        const response = await fetch("https://api.socialverseapp.com/admin/dashboard");
        const data = await response.json();
        console.log(data);
        return data;
        
    }
    let timestamps = [];
    let counts = [];
    let timestampBM = [];
    let countBM = [];
    let timestampCD = [];
    let countCD = [];
    let timestampCM = [];
    let countCM = [];
    let timestampED = [];
    let countED= [];
    let timestampEM = [];
    let countEM = [];
    let timestampUD= [];
    let countUD = [];
    let timestampUM = [];
    let countUM = [];
    let datas  = await getdata();
    let chart = datas.dashboard.blockchainMetrics.daily.chartData;
    let chartmon = datas.dashboard.blockchainMetrics.monthly.chartData;
    let contentchartD =  datas.dashboard.contentMetrics.daily.chartData;
    let contentchartM =  datas.dashboard.contentMetrics.monthly.chartData;
    let engagechartD =  datas.dashboard.engagementMetrics.daily.chartData;
    let engagechartM =  datas.dashboard.engagementMetrics.monthly.chartData;
    let userchartD =  datas.dashboard.userMetrics.daily.chartData;
    let userchartM =  datas.dashboard.userMetrics.monthly.chartData;
    
    


    chart.forEach((dataPoint:any) => {
      timestamps.push(dataPoint.timestamp);
      counts.push(dataPoint.count);
    });

    chartmon.forEach((dataPoint:any) => {
        timestampBM.push(dataPoint.timestamp);
        countBM.push(dataPoint.count);
      });
    
      contentchartD.forEach((dataPoint:any) => {
        timestampCD.push(dataPoint.timestamp);
        countCD.push(dataPoint.count);
      });

      contentchartM.forEach((dataPoint:any) => {
        timestampCM.push(dataPoint.timestamp);
        countCM.push(dataPoint.count);
      });

      engagechartD.forEach((dataPoint:any) => {
        timestampED.push(dataPoint.timestamp);
        countED.push(dataPoint.count);
      });

      engagechartM.forEach((dataPoint:any) => {
        timestampEM.push(dataPoint.timestamp);
        countEM.push(dataPoint.count);
      });

      userchartD.forEach((dataPoint:any) => {
        timestampUD.push(dataPoint.timestamp);
        countUD.push(dataPoint.count);
      });
      userchartM.forEach((dataPoint:any) => {
        timestampUM.push(dataPoint.timestamp);
        countUM.push(dataPoint.count);
      });

    console.log(timestamps);
    console.log(counts);
  
    return (
        <div >




<div className="dashboard-container">
<div className="flex justify-center items-center head">
  <h1 className="text-center">MetricSphere</h1>
</div>

  {/* Blockchain Metrics */}
  <h1>Blockchain Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
    <h2>Total Tokens: {datas.dashboard.blockchainMetrics.allTime.totalTokens}</h2>
  </div>
  <div className="metric-card">
    <h2>Total Wallet On Ethereum: {datas.dashboard.blockchainMetrics.allTime.totalWalletOnEthereum}</h2>
  </div>
  <div className="metric-card">
    <h2>Total Wallet On Polygon: {datas.dashboard.blockchainMetrics.allTime.totalWalletOnPolygon}</h2>
  </div>
  <div className="metric-card">
    <h2>Total Wallet On Solana: {datas.dashboard.blockchainMetrics.allTime.totalWalletOnSolana}</h2>
  </div>
    
  </div>

  <h1>Daily Blockchain Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
      <h2>Total Tokens: {datas.dashboard.blockchainMetrics.daily.totalTokens}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Wallet On Ethereum:{datas.dashboard.blockchainMetrics.daily.totalWalletOnEthereum}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Wallet On Polygon:{datas.dashboard.blockchainMetrics.daily.totalWalletOnPolygon}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Wallet On Solana:{datas.dashboard.blockchainMetrics.daily.totalWalletOnSolana}</h2>
  </div>
    
    
  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">Blockchain Metrics Daily</div>
    <SimpleGraph timestamps={timestamps} counts={counts} label="blockchainMetrics Daily" />
  </div>

  <h1>Monthly Blockchain Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
      <h2>Total Tokens: {datas.dashboard.blockchainMetrics.monthly.totalTokens}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Wallet On Ethereum:{datas.dashboard.blockchainMetrics.monthly.totalWalletOnEthereum}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Wallet On Polygon:{datas.dashboard.blockchainMetrics.monthly.totalWalletOnPolygon}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Wallet On Solana:{datas.dashboard.blockchainMetrics.monthly.totalWalletOnSolana}</h2>
  </div>
    
    
  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">Blockchain Metrics Monthly</div>
    <SimpleGraph timestamps={timestampBM} counts={countBM} label="blockchainMetrics monthly" />
  </div>

  {/* Content Metrics */}
  <h1>Content Metrics</h1>
  <h2>All Time</h2>
  <div className="metrics-row">
  <div className="metric-card">
  <h2>Total Category:{datas.dashboard.contentMetrics.allTime.totalCategory}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Comments:{datas.dashboard.contentMetrics.allTime.totalComments}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Blocked:{datas.dashboard.contentMetrics.allTime.totalPostBlocked}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Deleted:{datas.dashboard.contentMetrics.allTime.totalPostDeleted}</h2>
  </div>
   
  <div className="metric-card">
  <h2>Total Post Exit Count:{datas.dashboard.contentMetrics.allTime.totalPostExitCount}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Shares:{datas.dashboard.contentMetrics.allTime.totalPostShares}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Posts:{datas.dashboard.contentMetrics.allTime.totalPosts}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Views:{datas.dashboard.contentMetrics.allTime.totalViews}</h2>
  </div>
 
  </div>

  <h1>Daily Content Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
  <h2>Total Category:{datas.dashboard.contentMetrics.daily.totalCategory}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Comments:{datas.dashboard.contentMetrics.daily.totalComments}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Blocked:{datas.dashboard.contentMetrics.daily.totalPostBlocked}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Deleted:{datas.dashboard.contentMetrics.daily.totalPostDeleted}</h2>
  </div>
   
  <div className="metric-card">
  <h2>Total Post Exit Count:{datas.dashboard.contentMetrics.daily.totalPostExitCount}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Shares:{datas.dashboard.contentMetrics.daily.totalPostShares}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Posts:{datas.dashboard.contentMetrics.daily.totalPosts}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Views:{datas.dashboard.contentMetrics.daily.totalViews}</h2>
  </div>

  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">Content Metrics Daily</div>
    <SimpleGraph timestamps={timestampCD} counts={countCD} label="contentMetrics Daily" />
  </div>

  <h1>Monthly Content Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
  <h2>Total Category:{datas.dashboard.contentMetrics.monthly.totalCategory}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Comments:{datas.dashboard.contentMetrics.monthly.totalComments}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Blocked:{datas.dashboard.contentMetrics.monthly.totalPostBlocked}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Deleted:{datas.dashboard.contentMetrics.monthly.totalPostDeleted}</h2>
  </div>
   
  <div className="metric-card">
  <h2>Total Post Exit Count:{datas.dashboard.contentMetrics.monthly.totalPostExitCount}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Post Shares:{datas.dashboard.contentMetrics.monthly.totalPostShares}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Posts:{datas.dashboard.contentMetrics.monthly.totalPosts}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Views:{datas.dashboard.contentMetrics.monthly.totalViews}</h2>
  </div>

  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">Content Metrics Monthly</div>
    <SimpleGraph timestamps={timestampCM} counts={countCM} label="contentMetrics monthly" />
  </div>

  {/* Engagement Metrics */}
  <h1>Engagement Metrics</h1>
  <h2>All Time</h2>
  <div className="metrics-row">

  <div className="metric-card">
  <h2>Total privatechats:{datas.dashboard.engagementMetrics.allTime.privateChats}</h2>
  </div>
   
  <div className="metric-card">
  <h2>Total likes:{datas.dashboard.engagementMetrics.allTime.totalLikes}</h2>
  </div>
  <div className="metric-card">
  <h2>Total message:{datas.dashboard.engagementMetrics.allTime.totalMessage}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Notifications:{datas.dashboard.engagementMetrics.allTime.totalNotifications}</h2>
  </div>
  <div className="metric-card">
  <h2>Total views:{datas.dashboard.engagementMetrics.allTime.totalViews}</h2>
  </div>

  </div>

  <h1>Daily Engagement Metrics</h1>
  <div className="metrics-row">

  <div className="metric-card">
  <h2>Private Chats:{datas.dashboard.engagementMetrics.allTime.privateChats}</h2>
  </div>
   
  <div className="metric-card">
  <h2>Total Likes:{datas.dashboard.engagementMetrics.daily.totalLikes}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Message:{datas.dashboard.engagementMetrics.daily.totalMessage}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Notifications:{datas.dashboard.engagementMetrics.daily.totalNotifications}</h2>
  </div>
  <div className="metric-card">
  <h2> Total Views :{datas.dashboard.engagementMetrics.daily.totalViews}</h2>
  </div>

  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">Engagement Metrics Daily</div>
    <SimpleGraph timestamps={timestampED} counts={countED} label="engagementMetrics Daily" />
  </div>

  <h1>Monthly Engagement Metrics</h1>
  <div className="metrics-row">

  <div className="metric-card">
  <h2>Private Chats:{datas.dashboard.engagementMetrics.monthly.privateChats}</h2>
  </div>
   
  <div className="metric-card">
  <h2>Total Likes:{datas.dashboard.engagementMetrics.monthly.totalLikes}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Message:{datas.dashboard.engagementMetrics.monthly.totalMessage}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Notification:{datas.dashboard.engagementMetrics.monthly.totalNotifications}</h2>
  </div>
  <div className="metric-card">
  <h2> Total views:{datas.dashboard.engagementMetrics.monthly.totalViews}</h2>
  </div>

  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">Engagement Metrics Monthly</div>
    <SimpleGraph timestamps={timestampEM} counts={countEM} label="engagementMetrics monthly" />
  </div>

  {/* User Metrics */}
  <h1>User Metrics</h1>
  <h2>All Time</h2>
  <div className="metrics-row">

  <div className="metric-card">
  <h2>Active user:{datas.dashboard.userMetrics.allTime.activeUser}</h2>
  </div>
  <div className="metric-card">
  <h2>creator:{datas.dashboard.userMetrics.allTime.creator}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Referral:{datas.dashboard.userMetrics.allTime.totalReferral}</h2>
  </div>
  <div className="metric-card">
  <h2>Total user:{datas.dashboard.userMetrics.allTime.totalUser}</h2>
  </div>

  </div>

  <h1>Daily User Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
  <h2>Active user:{datas.dashboard.userMetrics.daily.activeUser}</h2>
  </div>
  <div className="metric-card">
  <h2>creator:{datas.dashboard.userMetrics.daily.creator}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Referral:{datas.dashboard.userMetrics.daily.totalReferral}</h2>
  </div>
  <div className="metric-card">
  <h2> Total User :{datas.dashboard.userMetrics.daily.totalUser}</h2>
  </div>

  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">User Metrics Daily</div>
    <SimpleGraph timestamps={timestampUD} counts={countUD} label="userMetrics Daily" />
  </div>

  <h1>Monthly User Metrics</h1>
  <div className="metrics-row">
  <div className="metric-card">
  <h2>Active User:{datas.dashboard.userMetrics.monthly.activeUser}</h2>
  </div>
  <div className="metric-card">
  <h2>creator:{datas.dashboard.userMetrics.monthly.creator}</h2>
  </div>
  <div className="metric-card">
  <h2>Total Referral :{datas.dashboard.userMetrics.monthly.totalReferral}</h2>
  </div>
  <div className="metric-card">
  <h2> Total User :{datas.dashboard.userMetrics.monthly.totalUser}</h2>
  </div>

  </div>

  <div className="simple-graph-container">
    <div className="simple-graph-label">User Metrics Monthly</div>
    <SimpleGraph timestamps={timestampUM} counts={countUM} label="userMetrics monthly" />
  </div>
</div>

    </div>

   
    )
   
}
