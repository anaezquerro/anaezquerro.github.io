// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-code",
          title: "code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-headed-to-miami-️-to-present-our-graph-linearizations-at-emnlp-2024",
          title: 'Headed to Miami🏖️ to present our graph linearizations at EMNLP 2024!',
          description: "",
          section: "News",},{id: "news-if-you-have-approached-me-in-our-poster-session-at-emnlp-2024-or-you-did-not-have-time-to-do-it-feel-free-to-ask-any-doubt-about-our-work",
          title: 'If you have approached me in our poster session at EMNLP 2024 (or...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-nodalida-baltic-hlt-2025",
          title: 'Paper accepted at NoDaLiDa/Baltic-HLT 2025!',
          description: "",
          section: "News",},{id: "news-completed-my-master-s-degree-in-artificial-intelligence-with-an-honor-distinction-for-my-thesis-on-graph-parsing-as-sequence-labeling",
          title: 'Completed my master’s degree in Artificial Intelligence with an honor distinction for my...',
          description: "",
          section: "News",},{id: "news-a-lot-of-people-came-to-my-poster-at-nodalida-baltic-hlt-2025-https-sites-google-com-view-nodalida-bhlt2025-i-m-really-happy-for-that-and-made-a-lot-of-suggestions-to-extend-improve-our-paper-we-are-now-open-for-new-collaborations-so-if-you-are-interested-in-a-similar-topic-maybe-we-can-talk-about-it",
          title: 'A lot of people came to my poster at [NoDaLiDa/Baltic-HLT 2025]((https://sites.google.com/view/nodalida-bhlt2025) (I’m really...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-acl-2025-see-you-in-vienna",
          title: 'Paper accepted at ACL 2025. See you in Vienna!',
          description: "",
          section: "News",},{id: "news-amazing-experience-in-vienna-if-we-have-met-at-acl-2025-feel-free-to-reach-out-again-to-talk-about-nlp-research-or-meet-in-future-venues-and-cities",
          title: 'Amazing experience in Vienna! If we have met at ACL 2025 feel free...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-emnlp-2025-really-excited-to-finally-visit-china",
          title: 'Paper accepted at EMNLP 2025. Really excited to finally visit China!',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("anaezquerro.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%61.%65%7A%71%75%65%72%72%6F@%74%75%67%72%61%7A.%61%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anaezquerro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anaezquerro01", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-2347-9706", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=aVWJFm0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/anaezquerro_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
