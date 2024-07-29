import { NoteHostSiteConfig, googleTag } from 'notehost'
import { PAGE_SCRIPT_JS_STRING } from './_page-script-js-string'

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = 'G-8HMRWWFJNR'

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: 'blog.colinroper.com',

  // Metatags, optional
  // For main page link preview
  siteName: 'On Product, Tech, &amp; Leadership',
  siteDescription: 'Exceptional Product Management is a career-long journey. Some challenges are as old as time, but there are always new ideas and techniques to help us build better products. This site is shares some of things I’ve learned in my Product career which I hope will help you build something great.',
  siteImage: 'https://file.notion.so/f/f/8a29316b-211c-4e7d-8241-1303636b38f5/10d89547-6f00-450a-b77c-d104b48dd2c8/optl-Icon.gif',
  siteIcon: 'https://colinroper.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8a29316b-211c-4e7d-8241-1303636b38f5%2Fed282c14-7ad4-49ce-b08c-c794d41ca696%2FFavicon_OPTL.ico?table=block&id=c684b645-67da-4aa4-8708-c79dadc5b02a&spaceId=8a29316b-211c-4e7d-8241-1303636b38f5&userId=&cache=v2',

  // Twitter handle, optional
  // twitterHandle: '',

  // URL to custom favicon.ico
  //siteIcon: 'https://colinroper.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8a29316b-211c-4e7d-8241-1303636b38f5%2Fed282c14-7ad4-49ce-b08c-c794d41ca696%2FFavicon_OPTL.ico?table=block&id=c684b645-67da-4aa4-8708-c79dadc5b02a&spaceId=8a29316b-211c-4e7d-8241-1303636b38f5&userId=&cache=v2',

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  // notionDomain: '',

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  slugToPage: {
    '': '6748c61e3f924cc4baffc4479b4d6b84',
    'about': '54a956ee7484475ab395d820f9f935dc',
    'subscribe': '5417dde34d404d55aeed65e01e954600',
    'contact': '904bdb0d0ce24e319049d8069e967c12',
    'glossary': '82405609b3464902bb24a00091297d14',
    'services': 'e23ccbec7fb843dcae2093d7c4bb571c',
    'collaborate': 'e23ccbec7fb843dcae2093d7c4bb571c',
    'posts': '28ebf9b7a03b47ddb1fc2eedb31257e6',    
  
    'Advice-for-new-PMs-still-relevant-for-veterans-Part-2': '70987e91d0e24b37a4a74f162dfa67ba',
    'Advice-for-new-PMs-still-relevant-for-veterans-Part-1': '08b13066657c485985fa454ea2cff354',
    'Know-where-your-candidate-will-grow': 'f7a4aa310d5e49949ecb34cda9acdeff',
    'Your-strategy-won-t-work-until-you-say-no': '1af39ce4f21e461a86821228529868fc',
    'Goal-Setting-Best-Practices': '07737c1b8b4a412db793cdc88b5f3e9a',
    'Q-A-on-Relocating-to-Berlin': '63297c3f55004ac6aaa0ec6086ef19d9',
    'Goal-setting-Clarifying-terminology': 'b71f6f78bf2b4c07af1bca89637d62c5',
    'Using-Notion-as-your-Blog': '1e75c0657f34468595b25bd4f7c181e4',
    'Defining-your-startups-first-cultural-values': '1ef4a4d445c04f5681c48fea39f893f6',
    'Breaking-into-Product-Management': 'b83e297920c344c8a7a93935bd63960e',
    'Design-a-rock-solid-PM-onboarding-Part-1-Pre-game': '7c4a68e003d248f5bb28c175a613f38c',
    'Design-a-rock-solid-PM-onboarding-Part-3-Partnership': 'e9b7122e88ff4991870ea5115a16cca2',
    'Design-a-rock-solid-PM-onboarding-Part-2-The-plan': '6aaec89f9cd34062a1906d17afd259b4',
    'How-to-create-your-Product-Vision-type': 'cf095600e3314a1abeed2152aee3c863',
    'An-Open-Q-A': '8b68d9084db04e08aa14f7f9b904684e',
    'Choosing-your-key-metrics': '41b2213cda5442a1be1443b428e192af',
    'NPS-Useful-KPI-Vanity-Metric-or-Joke': '05feb13473644797813199514093ce90',
    'Narrow-your-target-customer': '3f73484af87a46aa86a2f1e50926e663',
    'Empowerment-culture-comes-from-everyone': '85d735d3910a446d973f3955a24499ec',
    'Three-questions-for-identifying-your-main-business-priority': '6e818410cfcf4980a943ab1b6f81587e',
    'When-to-hire-your-first-Product-leader': '15875fd156844abcb120aa3a68aaecef',
    'Getting-your-team-onboard-with-discovery-findings': '9ccad8d61bb049d2beab4eba35b2161f',
    'North-star-KPIs-and-sitchen-sink': 'affe8d9599424848aa52e4fbf72c7181',
    'Unified-theory-of-product-prioritization': '117bde4b2c9d4b46935603d8563c232f',
    'Tactics-for-feature-awareness': '3a9366af25db4047ab857fb64c0ffaf5',
    'Narrowing-your-initial-product-direction-Part-1': '21f387be86b14d5daa8e975c740f160a',
    'Narrowing-your-initial-product-direction-Part-2': '876521852efd45589c26cfd62b307b88',
    // Hint: you can use '/' in slug name to create subpages
    // 'about/people': 'NOTION_PAGE_ID',
  },

  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  // pageMetadata: {
  //   'NOTION_PAGE_ID': {
  //     title: 'My Custom Page Title',
  //     description: 'My custom page description',
  //     image: 'https://imagehosting.com/images/page_preview.jpg',
  //     author: 'My Name',
  //   },
  // },

  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    www: {
      redirect: 'https://blog.colinroper.com',
    },
  },

  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
   fof: {
     page: "6af1eacc3f764fe6b02da62a2eba1a56",
     slug: "404", // default
  },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: 'Open Sans',

  // Custom JS for head and body of a Notion page
  customHeadCSS: `
    /* Note: All data-block-ids will need to be replaced with the relevant IDs of your own website. */

    /* ALL PAGES */
    /* Remove Notion Branding from Top Bar - Mobile */
    div.notion-topbar-mobile > div:nth-child(5) { display: none !important;} 
 
    /* Shrink footer font size */
    [data-block-id="2b138575-4a07-464c-8f80-684af21f03db"] { font-size: 12px ;}

    /* HOME PAGE */
    /* Hide left column for mobile devices on Home page */
    @media (max-width: 767px) {
      /* Spacer */       [data-block-id="01ce8358-c053-482b-b110-d873f957df21"] {display: none;}
      /* H. Line  */  [data-block-id="3b408e1d-f34f-43a4-92ae-7864af35e12e"] {display: none;}
      /* Spacer */    [data-block-id="af7fe48b-7778-4047-8099-f75d639e5419"] {display: none;}
      /* Glossary */ [data-block-id="82405609-b346-4902-bb24-a00091297d14"] {display: none;}
      /* Subscribe */ [data-block-id="5417dde3-4d40-4d55-aeed-65e01e954600"] {display: none;}
      /* About */     [data-block-id="54a956ee-7484-475a-b395-d820f9f935dc"] {display: none;}
      /* Services */     [data-block-id="e23ccbec-7fb8-43dc-ae20-93d7c4bb571c"] {display: none;}
      /* Contact */   [data-block-id="904bdb0d-0ce2-4e31-9049-d8069e967c12"] {display: none;}
    }

    /* Remove mini icons in gallery view */
    .notion-selectable .notion-collection_view-block .notion-record-icon.notranslate {display: none !important;}

    /* Hide sort, filter, automation icons in gallery view for desktop */
    div.notion-collection_view-block > div > div:nth-child(2) > div:nth-of-type(1) {display: none !important;}
    div.notion-collection_view-block > div > div:nth-child(2) > div:nth-of-type(2) {display: none !important;}
    div.notion-collection_view-block > div > div:nth-child(2) > div:nth-of-type(3) {display: none !important;}

    /* ABOUT PAGE */
    /* Center-align text under photo on About page */
    [data-block-id="f5ac2a32-d873-4903-86da-8ecef80019d4"],
    [data-block-id="35e405f5-4644-40bd-8665-9ee6b43f20f2"],
    [data-block-id="e23a90fe-5d3f-4a10-a4d9-f18fd4472e94"],
    [data-block-id="6c506c59-030e-47dc-b9c2-24fe5f8a47b8"],
    [data-block-id="19e15531-e3d2-4c86-90a4-b566ad62e64e"],
    [data-block-id="75b5239d-acf1-48ac-97d3-a4d9175f4722"] 
    {text-align: center;}

    /* SERVICES PAGE */
    /* Center text of upper callout box */
    [data-block-id="2c357e9f-3513-441a-8b40-7af78378811c"] {text-align: center !important;}

    /* Change background color, padding, and font color of upper callout box */
    [data-block-id="2c357e9f-3513-441a-8b40-7af78378811c"] > div {background: rgba(240, 244, 247, 1) !important; padding: 0px 20px; !important; color:rgba(64, 89, 118, 1) !important;}

    /* Change H1 text color */
    [data-block-id="c1178518-d941-4fb3-96f7-bc28103b0cf5"] > div > div {color:rgba(107, 140, 177, 1) !important; fill:rgba(107, 140, 177, 1) !important;}
    [data-block-id="20964190-baf6-4b7f-9c8d-d73a39eda858"] > div > div {color:rgba(107, 140, 177, 1) !important; fill:rgba(107, 140, 177, 1) !important;}
    [data-block-id="e3f52b04-5e0b-42fc-94b1-d5366e55ad63"] > div > div {color:rgba(107, 140, 177, 1) !important; fill:rgba(107, 140, 177, 1) !important;}  
    [data-block-id="42bff091-2140-4417-89a6-200e55000af6"] > div > div {color:rgba(107, 140, 177, 1) !important; fill:rgba(107, 140, 177, 1) !important;}   

    /* Center text below company logos */
    [data-block-id="101c8232-f75b-416c-8ef7-963de9b57939"] {text-align: center !important;}

    /* Center text for LinkedIn link */
    [data-block-id="965c97c2-cfea-416c-a35f-3993cef3783a"] {text-align: center !important;}

    /* Change background color of lower callout box */
    [data-block-id="cdc2257c-cec5-4539-934c-4418175fd351"] > div {background: rgba(240, 244, 247, 1) !important; text-align: center !important; color:rgba(64, 89, 118, 1) !important;}

  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
