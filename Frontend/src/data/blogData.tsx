import image1 from '../assets/ai.webp'
import image3 from '../assets/tesla.jpeg'
import image4 from '../assets/sustainable.jpeg'
import image5 from '../assets/remote.webp'
import image6 from '../assets/sustainable.jpeg'
import image7 from '../assets/aichange.jpg'
import image8 from '../assets/travel.jpeg'
import image10 from '../assets/free mind.jpeg'
import image11 from '../assets/detox.webp'
import image12 from '../assets/chatGPT.webp'
import image13 from '../assets/5g.jpg'
import image14 from '../assets/quantu.webp'
import image15 from '../assets/plastic.webp'
import image16 from '../assets/morning.jpeg'
import image17 from '../assets/women.webp'
import image18 from '../assets/spaorts.webp'
import image19 from '../assets/supplement.jpg'
import image20 from '../assets/food.jpeg'
import image21 from '../assets/sacrifice.jpeg'
import image22 from '../assets/a.webp'
import image23 from '../assets/endurance.webp'
import image24 from '../assets/ssss.jpeg'
import{ v4 as uuid} from "uuid"

export interface Props {
    id:  string | number ;
    path?: string;
    user?: string;
    date?: string;
    title: string;
    details?: string;
    category: string;
}

export interface excluded extends Props {
    path?: string;
}

export interface isNotDesc extends Props {
    details?: string;
    path?: string;
    className?: string;
}

export const data: Props[] = [
    {
        id: uuid() ,
        title: "Sustainable Living in 2025",
        user: "Netflix",
        details: "Sustainability is more than just a buzzword; it’s a necessity for the planet’s future. This blog could focus on ways to incorporate eco-friendly habits into daily life, such as reducing plastic usage, adopting energy-efficient appliances, and supporting ethical brands. Include tips on sustainable fashion, zero-waste home practices, and how technology is enabling green living through apps and gadgets. Highlight stories of individua'l 's     or communities successfully adopting sustainable lifestyles to inspire readers.",
        category: "Lifestyle",
        path: image4,
        date: "12-003-23"
    },
    {
        id: uuid() ,
        title: "The Future of Remote Work",
        user: "BBC",
        details: " Remote work has gone from being a necessity during the pandemic to a preferred choice for many employees. This blog could delve into the benefits and challenges of remote and hybrid w'o 'r    k models, the importance of building a strong remote company culture, and the tools that are enabling this transition. Offer advice for individuals     looking to excel in remote roles, including tips for date management, staying productive, and maintaining work-life balance.",
        category: "Business",
        path: image5,
        date: "10-09-24"
    },

    {
        id: uuid(),
        title: "The Role of ChatGPT in Content Creation",
        user: "Wikipedia",
        details: " AI tools like ChatGPT are changing the content creation landscape, enabling creators to brainstorm idea's ',     write drafts, and optimize their work more efficiently. This blog can explore how AI is being used by bloggers, marketers, and businesses to streamline content production. Discuss the ethical concerns of AI-generated content and offer tips for using these tools as a complement rather than a replacement for human creativity.",
        category: "Technology",
        path: image12,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "5G and Beyond: How Faster Networks Are Transforming Our World",
        user: "Netflix",
        details: "With the rollout of 5G, internet speeds are reaching unprecedented levels, and it's not just about faster downloads. This blog could dive deep into how 5G is set to impact industries like healthcare, autonomous vehicles, and IoT (Internet of Things). Discuss how 5G enables better connectivity in smart cities and unlocks new opportunities for businesses to innovate. Speculate on the next big leap in connectivity, like 6G, and its potential applications.",
        category: "Technology",
        path: image13,
        date: "01-09-24"
    },
    {
        id: uuid() ,
        title: "The Rise of Quantum Computing: What It Means for Your Future",
        user: "Netflix",
        details: ": Quantum computing is no longer a theoretical concept, it’s becoming a reality. This blog can explore how quantum computing works, its potential to revolutionize industries such as cybersecurity, medicine, and AI, and what the future of computing looks like. Dive into the mysteries of qubits, superposition, and entanglement, and explain how this new technology could solve problems that classical computers can’t. Discuss the challenges, including the need for better hardware and the implications for data security.",
        category: "Technology",
        path: image14,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Off the Grid: uuid() 1 '0     Hidde'n '     Travel Destinations You Need to Visit in 2024",
        user: "Netflix",
        details: " Skip the overcrowded tourist spots and explore lesser-known gems that offer unique experiences. This blog could feature destinations like remote islands, quaint villages, or eco-resorts that focus on sustainability. Share tips on how to reach these places, what to pack, and how to travel responsibly. Include stunning visuals and personal anecdotes to inspire wanderlust and encourage readers to embrace adventure in the year ahead.",
        category: "Travels",
        path: image24,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Mind Over Screen: How to Protect Your Mental Health in a Digital World",
        user: "Monies",
        details: " The digital age has brought both convenience and chaos to our lives. Constant notifications, comparison on social media, and the pressure to always be online are taking a toll on mental health. This blog could explore the psychology of digital addiction and provide 'p 'r    actical solutions for regaining control, such as setting boundaries, practicing mindfulness, and unplugging regularly. Include expert opinions and personal stories of people who’ve improved their mental health by rethinking their relationship with technology.",
        category: "Health & Wellness",
        path: image10,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Unplugged and Thriving: The Life-Changing Power of a Digital Detox",
        user: "Netflix",
        details: "Social media and constant notifications are wreaking havoc on our mental health and focus. This blog could explore the science behind digital overstimulation and its effects on the brain. Share actionable tips on unplugging, like setting phone-free zones, scheduling screen-free weekends, or replacing online date with fulfilling offline activities. Highlight the unexpected benefits of stepping away from the screen, such as improved relationships, enhanced creativity, and better sleep. Inspire readers with real-life stories of people who’ve transformed their lives by cutting back on digital distractions.",
        category: "Travel",
        path: image11,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "The Web3 Revolution: Why the Internet as You Know It is Dying",
        user: "Netflix",
        details: "Blockchain technology and the rise of Web3 are creating buzz across the tech world. Unlike Web2, where a few big players dominate, Web3 is all about decentralization, putting control in the hands of users. Your blog could explain blockchain basics, highlight real-world applications like decentralized finance (DeFi) and non-fungible tokens (NFTs), and discuss its potential to revolutionize sectors like healthcare, gaming, and education. Add insights into challenges like scalability, regulation, and user adoption.",
        category: "Technology",
        path: image22,
        date: "02-02-23"
    },

    {
        id: uuid() ,
        title: "Fueling Champions: The Best Foods to Enhance Your Performance",
        user: "BBC",
        details: "Nutrition plays a vital role in an athlete’s performance, recovery, and overall well-being. This blog could explore the importance of a balanced diet, focusing on what athletes eat before, during, and after training. Discuss essential nutrients like carbohydrates, proteins, fats, and vitamins, and how they support energy levels, muscle repair, and mental focus. Offer tips for both amateur and professional athletes on how to optimize their meals and snacks for maximum performance, including practical examples of meal plans and healthy recipes.",
        category: "Sports",
        path: image20,
        date: "13-09-24"
    },
    {
        id: uuid() ,
        title: "The Ultimate Guide 't 'o     Training Like a Pro Athlete",
        user: "Hoo",
        details: "Professional athletes are known for their elite-level fitness, and their training regimens are often a blend of strength, endurance, flexibility, and recovery. This blog could break down the essential components of a pro athlete’s fitness routine, including workouts, nutrition, mental preparation, and rest. Offer advice on how everyday people can adapt these principles into their own fitness programs, including insights from trainers and athletes themselves. Discuss how focusing on holistic training—rather than just one area of fitness—can lead to better overall health and performance.",
        category: "Health and Wellness",
        path: image21,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Strength vs. Endurance: Which Is Better for Your Fitness Goals?",
        user: "BGW",
        details: "Women's sports have gained significant momentum in recent years, with athletes breaking records and major companies investing in female-led leagues. This blog could discuss the strides'  'w    omen’s sports have made in gaining media attention, sponsorships, and a loyal fan base. Highlight breakthrough moments, such as the U.S. Women’s National Soccer Team’s World Cup victories or Serena Williams' impact on tennis. Explore the challenges still faced by women in sports, like pay disparity and media coverage, and discuss how the future of women’s sports will continue to evolve.",
        category: "Fitness",
        path: image23,
        date: "20-09-24"
    },
]

export const data4: excluded = {
    id: uuid() ,
    title: "Everything You Need to Know About the Apple iPhone 16",
    user: "Apple",
    details: "Stay updated with the latest insights, features, and innovations of the Apple iPhone 16. Explore detailed reviews, comparisons, and tips to make the most out of Apple's newest flagship device. Your go-to source for all things iPhone 16!",
    category: "Phone & Accessories",
    path: image6,
    date: "23-04-23"
}

export const data5: { mustRead: isNotDesc[] } = {
    mustRead: [
        {
            id: uuid() ,
            title: "AI in Everyday Life: How Technology Is Changing the Way We Live",
            user: "Netflix",
            details: "Artificial Intelligence is no longer just a sci-fi fantasy—it’s integrated into everything from our smartphones to home appliances. In this blog, discuss the growing presence of AI in tools like ChatGPT, automated customer service, and even personal healthcare apps. Weigh its advantages, such as convenience and efficiency, against ethical concerns like privacy and job displacement. End with practical tips for staying informed about emerging AI technologies.",
            category: "Technology",
            path: image7,
            date: "20-09-23"
        },
        {
            id: uuid() ,
            title: "Slow Travel: How to Truly Immerse Yourself in a New Culture",
            user: "Netflix",
            details: "Fast-paced travel itineraries often leave people more stressed than rejuvenated. This blog could champion the concept of slow travel—spending more date in fewer places to truly experience the culture. Discuss the benefits of staying in local home stays, learning basic phrases in the native language, and participating in community events. Offer examples of destinations perfect for slow travel and how this approach leads to deeper connections and more memorable experiences.",
            category: "Travel",
            path: image8,
            date: "20-09-23"
        },

        {
            id: uuid() ,
            title: "Morning Routines of Highly Successful People: What You Can Steal",
            user: "Netflix",
            details: "Ever wondered what the daily rituals of successful entrepreneurs, athletes, and celebrities look like? This blog could break down the morning routines of people like Tim Cook, Oprah Winfrey, and Richard Brandon. Highlight their habits—whether it’s meditation, exercise, journalism, or healthy breakfasts—and explain how these practices can boost productivity and mental clarity. Encourage readers to design their own idea'l '     morning routine to set the tone for a successful day.",
            category: "Technology",
            path: image16,
            date: "20-09-23"
        },
        {
            id: uuid() ,
            title: "Life Without Plastic: 10 Easy Swaps for a Zero-Waste Home",
            user: "Netflix",
            details: " Plastic pollution is one of the most pressing environmental issues, but it’s possible to reduce your reliance on plastic with small lifestyle changes. This blog could share easy and affordable swaps to make in your home, such as using glass containers, reusable shopping bags, and composable cleaning products. Include tips on how to find eco-friendly alternatives for everyday items like straws, toothbrushes, and packaging. Inspire readers with stories of individua'l 's     or families who have successfully adopted a zero-waste lifestyle.",
            category: "Others",
            path: image15,
            date: "20-09-23"
        }

    ]
}

export interface Page {
    Business: string[];
    Technology: string[];
    Sports: string[];
    Travel: string[];
    Entertainment: string[];
    Others: string[];
}

export const categoryPage: Page = {
    Business: ["startup", "Employee", "Success", "Video's '", "Markets"],
    Technology: ["Innovates", "Gadget", "Innovative Cities", "Upstarts", "Future Tech"],
    Sports: ["Football", "Tenis", "Golf", "Motosports", "Esports"],
    Travel: ["Destinations", "Food & Drinks", "Stay", "News", "Video's '"],
    Entertainment: ["Movies", "Artist", "Television", "Influencer", "Viral"],
    Others: ["Job Opportunities", "Mentorship", "Investment", "Work for Mood", "Support Us"]
}

export const posts  = [
    {
        id: uuid() ,
        title: "Sustainable Living in 2025",
        user: "Netflix",
        details: "Sustainability is more than just a buzzword; it’s a necessity for the planet’s future. This blog could focus on ways to incorporate eco-friendly habits into daily life, such as reducing plastic usage, adopting energy-efficient appliances, and supporting ethical brands. Include tips on sustainable fashion, zero-waste home practices, and how technology is enabling green living through apps and gadgets. Highlight stories of individua'l 's     or communities successfully adopting sustainable lifestyles to inspire readers.",
        category: "Lifestyle",
        path: image4,
        date: "12-003-23"
    },
    {
        id: uuid() ,
        title: "Supplements in Sports: What Works and What’s Just Hype?",
        user: "ECN",
        details: "The market for fitness and performance supplements is booming, but how many of these products are actually effective? This blog could dive into the world of sports supplements, examining popular products like protein powders, creatine, and BCAAs, and how they contribute to athletic performance. Discuss the science behind each supplement, including whether there’s credible research to back their benefits. Offer advice on which supplements are worth consider'i 'n    g and how to iden't 'i    fy misleading claims in the supplement industry.",
        category: "Sports",
        path: image19,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "The Future of Remote Work",
        user: "BBC",
        details: " Remote work has gone from being a necessity during the pandemic to a preferred choice for many employees. This blog could delve into the benefits and challenges of remote and hybrid w'o 'r    k models, the importance of building a strong remote company culture, and the tools that are enabling this transition. Offer advice for individua'l 's     looking to excel in remote roles, including tips for date management, staying productive, and maintaining work-life balance.",
        category: "Business",
        path: image5,
        date: "10-09-24"
    },
    {
        id: uuid() ,
        title: "The Role of ChatGPT in Content Creation",
        user: "Wikipedia",
        details: " AI tools like ChatGPT are changing the content creation landscape, enabling creators to brainstorm idea's ',     write drafts, and optimize their work more efficiently. This blog can explore how AI is being used by bloggers, marketers, and businesses to streamline content production. Discuss the ethical concerns of AI-generated content and offer tips for using these tools as a complement rather than a replacement for human creativity.",
        category: "Technology",
        path: image12,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Life Without Plastic: 10 Easy Swaps for a Zero-Waste Home",
        user: "Netflix",
        details: " Plastic pollution is one of the most pressing environmental issues, but it’s possible to reduce your reliance on plastic with small lifestyle changes. This blog could share easy and affordable swaps to make in your home, such as using glass containers, reusable shopping bags, and composable cleaning products. Include tips on how to find eco-friendly alternatives for everyday items like straws, toothbrushes, and packaging. Inspire readers with stories of individua'l 's     or families who have successfully adopted a zero-waste lifestyle.",
        category: "Others",
        path: image15,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "5G and Beyond: How Faster Networks Are Transforming Our World",
        user: "Netflix",
        details: "With the rollout of 5G, internet speeds are reaching unprecedented levels, and it's not just about faster downloads. This blog could dive deep into how 5G is set to impact industries like healthcare, autonomous vehicles, and IoT (Internet of Things). Discuss how 5G enables better connectivity in smart cities and unlocks new opportunities for businesses to innovate. Speculate on the next big leap in connectivity, like 6G, and its potential applications.",
        category: "Technology",
        path: image13,
        date: "01-09-24"
    },
    {
        id: uuid() ,
        title: "The Rise of Quantum Computing: What It Means for Your Future",
        user: "Netflix",
        details: ": Quantum computing is no longer a theoretical concept, it’s becoming a reality. This blog can explore how quantum computing works, its potential to revolutionize industries such as cybersecurity, medicine, and AI, and what the future of computing looks like. Dive into the mysteries of qubits, superposition, and entanglement, and explain how this new technology could solve problems that classical computers can’t. Discuss the challenges, including the need for better hardware and the implications for data security.",
        category: "Others",
        path: image14,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Off the Grid: uuid() 1 '0     Hidde'n '     Travel Destinations You Need to Visit in 2024",
        user: "Netflix",
        details: " Skip the overcrowded tourist spots and explore lesser-known gems that offer unique experiences. This blog could feature destinations like remote islands, quaint villages, or eco-resorts that focus on sustainability. Share tips on how to reach these places, what to pack, and how to travel responsibly. Include stunning visuals and personal anecdotes to inspire wanderlust and encourage readers to embrace adventure in the year ahead.",
        category: "Travels",
        path: image24,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Mind Over Screen: How to Protect Your Mental Health in a Digital World",
        user: "Monies",
        details: " The digital age has brought both convenience and chaos to our lives. Constant notifications, comparison on social media, and the pressure to always be online are taking a toll on mental health. This blog could explore the psychology of digital addiction and provide 'p 'r    actical solutions for regaining control, such as setting boundaries, practicing mindfulness, and unplugging regularly. Include expert opinions and personal stories of people who’ve improved their mental health by rethinking their relationship with technology.",
        category: "Health & Wellness",
        path: image10,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Unplugged and Thriving: The Life-Changing Power of a Digital Detox",
        user: "Netflix",
        details: "Social media and constant notifications are wreaking havoc on our mental health and focus. This blog could explore the science behind digital overstimulation and its effects on the brain. Share actionable tips on unplugging, like setting phone-free zones, scheduling screen-free weekends, or replacing online date with fulfilling offline activities. Highlight the unexpected benefits of stepping away from the screen, such as improved relationships, enhanced creativity, and better sleep. Inspire readers with real-life stories of people who’ve transformed their lives by cutting back on digital distractions.",
        category: "Travel",
        path: image11,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "The Web3 Revolution: Why the Internet as You Know It is Dying",
        user: "Netflix",
        details: "Blockchain technology and the rise of Web3 are creating buzz across the tech world. Unlike Web2, where a few big players dominate, Web3 is all about decentralization, putting control in the hands of users. Your blog could explain blockchain basics, highlight real-world applications like decentralized finance (DeFi) and non-fungible tokens (NFTs), and discuss its potential to revolutionize sectors like healthcare, gaming, and education. Add insights into challenges like scalability, regulation, and user adoption.",
        category: "Technology",
        path: image22,
        date: "02-02-23"
    },

    {
        id: uuid() ,
        title: "The Ultimate Guide 't 'o     Training Like a Pro Athlete",
        user: "Hoo",
        details: "Professional athletes are known for their elite-level fitness, and their training regimens are often a blend of strength, endurance, flexibility, and recovery. This blog could break down the essential components of a pro athlete’s fitness routine, including workouts, nutrition, mental preparation, and rest. Offer advice on how everyday people can adapt these principles into their own fitness programs, including insights from trainers and athletes themselves. Discuss how focusing on holistic training—rather than just one area of fitness—can lead to better overall health and performance.",
        category: "Health and Wellness",
        path: image21,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Strength vs. Endurance: Which Is Better for Your Fitness Goals?",
        user: "BGW",
        details: "Women's sports have gained significant momentum in recent years, with athletes breaking records and major companies investing in female-led leagues. This blog could discuss the strides'  'w    omen’s sports have made in gaining media attention, sponsorships, and a loyal fan base. Highlight breakthrough moments, such as the U.S. Women’s National Soccer Team’s World Cup victories or Serena Williams' impact on tennis. Explore the challenges still faced by women in sports, like pay disparity and media coverage, and discuss how the future of women’s sports will continue to evolve.",
        category: "Fitness",
        path: image23,
        date: "20-09-24"
    },
    {
        id: uuid() ,
        title: "AI in Everyday Life: How Technology Is Changing the Way We Live",
        user: "OpenAi",
        details: "Artificial Intelligence is no longer just a sci-fi fantasy—it’s integrated into everything from our smartphones to home appliances. In this blog, discuss the growing presence of AI in tools like ChatGPT, automated customer service, and even personal healthcare apps. Weigh its advantages, such as convenience and efficiency, against ethical concerns like privacy and job displacement. End with practical tips for staying informed about emerging AI technologies.",
        category: "Technology",
        path: image1,
        date: "20-09-23"
    },

    {
        id: uuid() ,
        title: "The Business of Sports Sponsorship: How Brands Are Winning Big",
        user: "Hoo",
        details: "Sports sponsorship is a major business, and brands are willing to invest billions in securing the perfect partnership. This blog could delve into how sponsorship deals work, how companies choose teams or events to sponsor, and the impact these partnerships have on both the brand and the sport. Explore successful examples of sponsorships like Nike’s deal with Michael Jordan or Pepsi’s long-term relationship with the NFL. Discuss how emerging sports like esports are attracting new types of sponsors, and what the future of sports marketing might look like in an increasingly digital world.",
        category: "Sports",
        path: image18,
        date: "20-08-24"
    },
    {
        id: uuid() ,
        title: "The Rise of Electric Vehicles: Revolutionizing the Automotive Industry",
        user: "Tesla",
        details: " The automotive industry is undergoing a significant shift toward electric vehicles (EVs). With companies like Tesla, Rivian, and legacy automakers entering the EV market, this blog can cover topics like the environmental benefits of EVs, government incentives, the growing charging infrastructure, and emerging trends like solid-s't 'a    te batteries. Address concerns such as the high cost of EVs and the environmental impact of battery production, and provide predictions for the future of sustainable transportation.",
        category: "Technology",
        path: image3,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "5G and Beyond: How Faster Networks Are Transforming Our World",
        user: "Netflix",
        details: "With the rollout of 5G, internet speeds are reaching unprecedented levels, and it's not just about faster downloads. This blog could dive deep into how 5G is set to impact industries like healthcare, autonomous vehicles, and IoT (Internet of Things). Discuss how 5G enables better connectivity in smart cities and unlocks new opportunities for businesses to innovate. Speculate on the next big leap in connectivity, like 6G, and its potential applications.",
        category: "Technology",
        path: image13,
        date: "01-09-24"
    },
    {
        id: uuid() ,
        title: "AI in Everyday Life: How Technology Is Changing the Way We Live",
        user: "Netflix",
        details: "Artificial Intelligence is no longer just a sci-fi fantasy—it’s integrated into everything from our smartphones to home appliances. In this blog, discuss the growing presence of AI in tools like ChatGPT, automated customer service, and even personal healthcare apps. Weigh its advantages, such as convenience and efficiency, against ethical concerns like privacy and job displacement. End with practical tips for staying informed about emerging AI technologies.",
        category: "Technology",
        path: image7,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Slow Travel: How to Truly Immerse Yourself in a New Culture",
        user: "Netflix",
        details: "Fast-paced travel itineraries often leave people more stressed than rejuvenated. This blog could champion the concept of slow travel—spending more date in fewer places to truly experience the culture. Discuss the benefits of staying in local home stays, learning basic phrases in the native language, and participating in community events. Offer examples of destinations perfect for slow travel and how this approach leads to deeper connections and more memorable experiences.",
        category: "Travel",
        path: image8,
        date: "20-09-23"
    },

    {
        id: uuid() ,
        title: "Morning Routines of Highly Successful People: What You Can Steal",
        user: "Netflix",
        details: "Ever wondered what the daily rituals of successful entrepreneurs, athletes, and celebrities look like? This blog could break down the morning routines of people like Tim Cook, Oprah Winfrey, and Richard Brandon. Highlight their habits—whether it’s meditation, exercise, journalism, or healthy breakfasts—and explain how these practices can boost productivity and mental clarity. Encourage readers to design their own idea'l '     morning routine to set the tone for a successful day.",
        category: "Technology",
        path: image16,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "AI in Everyday Life: How Technology Is Changing the Way We Live",
        user: "OpenAi",
        details: "Artificial Intelligence is no longer just a sci-fi fantasy—it’s integrated into everything from our smartphones to home appliances. In this blog, discuss the growing presence of AI in tools like ChatGPT, automated customer service, and even personal healthcare apps. Weigh its advantages, such as convenience and efficiency, against ethical concerns like privacy and job displacement. End with practical tips for staying informed about emerging AI technologies.",
        category: "Technology",
        path: image1,
        date: "20-09-23"
    },

    {
        id: uuid() ,
        title: "The Business of Sports Sponsorship: How Brands Are Winning Big",
        user: "Hoo",
        details: "Sports sponsorship is a major business, and brands are willing to invest billions in securing the perfect partnership. This blog could delve into how sponsorship deals work, how companies choose teams or events to sponsor, and the impact these partnerships have on both the brand and the sport. Explore successful examples of sponsorships like Nike’s deal with Michael Jordan or Pepsi’s long-term relationship with the NFL. Discuss how emerging sports like esports are attracting new types of sponsors, and what the future of sports marketing might look like in an increasingly digital world.",
        category: "Sports",
        path: image18,
        date: "20-08-24"
    },
    {
        id: uuid() ,
        title: "Supplements in Sports: What Works and What’s Just Hype?",
        user: "ECN",
        details: "The market for fitness and performance supplements is booming, but how many of these products are actually effective? This blog could dive into the world of sports supplements, examining popular products like protein powders, creatine, and BCAAs, and how they contribute to athletic performance. Discuss the science behind each supplement, including whether there’s credible research to back their benefits. Offer advice on which supplements are worth consider'i 'n    g and how to iden't 'i    fy misleading claims in the supplement industry.",
        category: "Sports",
        path: image19,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "The Rise of Electric Vehicles: Revolutionizing the Automotive Industry",
        user: "Tesla",
        details: " The automotive industry is undergoing a significant shift toward electric vehicles (EVs). With companies like Tesla, Rivian, and legacy automakers entering the EV market, this blog can cover topics like the environmental benefits of EVs, government incentives, the growing charging infrastructure, and emerging trends like solid-s't 'a    te batteries. Address concerns such as the high cost of EVs and the environmental impact of battery production, and provide predictions for the future of sustainable transportation.",
        category: "Technology",
        path: image3,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Life Without Plastic: 10 Easy Swaps for a Zero-Waste Home",
        user: "Netflix",
        details: " Plastic pollution is one of the most pressing environmental issues, but it’s possible to reduce your reliance on plastic with small lifestyle changes. This blog could share easy and affordable swaps to make in your home, such as using glass containers, reusable shopping bags, and composable cleaning products. Include tips on how to find eco-friendly alternatives for everyday items like straws, toothbrushes, and packaging. Inspire readers with stories of individua'l 's     or families who have successfully adopted a zero-waste lifestyle.",
        category: "Entertainment",
        path: image15,
        date: "20-09-23"
    },
    {
        id: uuid() ,
        title: "Unplugged and Thriving: The Life-Changing Power of a Digital Detox",
        user: "Netflix",
        details: "Social media and constant notifications are wreaking havoc on our mental health and focus. This blog could explore the science behind digital overstimulation and its effects on the brain. Share actionable tips on unplugging, like setting phone-free zones, scheduling screen-free weekends, or replacing online date with fulfilling offline activities. Highlight the unexpected benefits of stepping away from the screen, such as improved relationships, enhanced creativity, and better sleep. Inspire readers with real-life stories of people who’ve transformed their lives by cutting back on digital distractions.",
        category: "Travel",
        path: image11,
        date: "20-09-23"
    },

    {
        id: uuid() ,
        title: "Fueling Champions: The Best Foods to Enhance Your Performance",
        user: "BBC",
        details: "Nutrition plays a vital role in an athlete’s performance, recovery, and overall well-being. This blog could explore the importance of a balanced diet, focusing on what athletes eat before, during, and after training. Discuss essential nutrients like carbohydrates, proteins, fats, and vitamins, and how they support energy levels, muscle repair, and mental focus. Offer tips for both amateur and professional athletes on how to optimize their meals and snacks for maximum performance, including practical examples of meal plans and healthy recipes.",
        category: "Sports",
        path: image20,
        date: "13-09-24"
    },
    {
        id: uuid() ,
        title: "Strength vs. Endurance: Which Is Better for Your Fitness Goals?",
        user: "BGW",
        details: "Women's sports have gained significant momentum in recent years, with athletes breaking records and major companies investing in female-led leagues. This blog could discuss the strides'  'w    omen’s sports have made in gaining media attention, sponsorships, and a loyal fan base. Highlight breakthrough moments, such as the U.S. Women’s National Soccer Team’s World Cup victories or Serena Williams' impact on tennis. Explore the challenges still faced by women in sports, like pay disparity and media coverage, and discuss how the future of women’s sports will continue to evolve.",
        category: "Fitness",
        path: image23,
        date: "20-09-24"
    },
    {
        id: uuid() ,
        title: "The Future of Women’s Sports: Breaking Barriers and Shaping History",
        user: "Hoo",
        details: "Women's sports have gained significant momentum in recent years, with athletes breaking records and major companies investing in female-led leagues. This blog could discuss the strides'  'w    omen’s sports have made in gaining media attention, sponsorships, and a loyal fan base. Highlight breakthrough moments, such as the U.S. Women’s National Soccer Team’s World Cup victories or Serena Williams' impact on tennis. Explore the challenges still faced by women in sports, like pay disparity and media coverage, and discuss how the future of women’s sports will continue to evolve.",
        category: "Sports",
        path: image17,
        date: "20-09-23"
    }
]

export const data2 = posts.slice(20,24)

export const data3: Props = posts[14]
