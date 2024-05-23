
// Translation function
function translate(language) {
    const translations = {
        english: {
            chooseLanguage: "Choose Your Language:",
            enterBMS: "Enter Your BMS ID",
            chooseYourReferrerPreferred: "Choose for your referrer his preferred",
            languageLabel: "Language:",
            locationLabel: "Location:",
            jobLabel: "Job:",
            nextButton: "Next",
            thankYou: "Thank you for your referral!",
            referralMessage1: "As we grow into Malaysia, become #MoreTogether as we #ElevateAsia, here are the links your friend can use so this is tagged to your profile into our Recruiting System.",
            shareWhatsApp: "Share via WhatsApp",
            shareLine: "Share via Line",
            scanCodeMessage: "or have your friend scanning this code above!",
            vrMessage: "They can visit our locations in VR so they learn of us:",
            talentTeamMessage: "The Talent Attraction Team",
            languageLabel: "Language"
        },
        korean: {
            chooseLanguage: "언어 선택:",
            enterBMS: "BMS ID 입력",
            chooseYourReferrerPreferred: "추천인 선호 사항 선택:",
            languageLabel: "언어:",
            locationLabel: "위치:",
            jobLabel: "직업:",
            nextButton: "다음",
            thankYou: "추천해 주셔서 감사합니다!",
            referralMessage1: "말레이시아로의 확장을 통해 #MoreTogether가 되어 아시아를 높이고 있습니다. 친구가 사용할 수 있는 링크를 당신의 프로필에 태그하여 우리의 채용 시스템에 연결합니다.",
            shareWhatsApp: "WhatsApp으로 공유하기",
            shareLine: "Line으로 공유하기",
            scanCodeMessage: "또는 친구가 위의 코드를 스캔하게 하세요!",
            vrMessage: "VR 위치를 방문하여 우리에 대해 배울 수 있습니다:",
            talentTeamMessage: "재능 유치 팀",
            languageLabel: "언어"
        },
        thai: {
            chooseLanguage: "เลือกภาษาของคุณ:",
            enterBMS: "ใส่ BMS ID",
            chooseYourReferrerPreferred: "เลือกสิ่งที่ผู้อ้างอิงของคุณต้องการ",
            languageLabel: "ภาษา:",
            locationLabel: "สถานที่:",
            jobLabel: "งาน:",
            nextButton: "ต่อไป",
            thankYou: "ขอบคุณสำหรับการอ้างอิงของคุณ!",
            referralMessage1: "ในขณะที่เราขยายไปยังมาเลเซีย, กลายเป็น #MoreTogether เนื่องจากเรา #ElevateAsia, นี่คือลิงก์ที่เพื่อนของคุณสามารถใช้งานได้ โดยมีแท็กไปยังโปรไฟล์ของคุณในระบบการรับสมัครของเรา.",
            shareWhatsApp: "แชร์ผ่าน WhatsApp",
            shareLine: "แชร์ผ่าน Line",
            scanCodeMessage: "หรือให้เพื่อนของคุณสแกนโค้ดด้านบนนี้!",
            vrMessage: "พวกเขาสามารถเยี่ยมชมสถานที่ของเราใน VR เพื่อเรียนรู้เกี่ยวกับเรา:",
            talentTeamMessage: "ทีมดึงดูดความสามารถ"
        },
        malay: {
            chooseLanguage: "Pilih Bahasa Anda:",
            enterBMS: "Masukkan ID BMS",
            chooseYourReferrerPreferred: "Pilih yang disukai oleh pengarah jemputan anda",
            languageLabel: "Bahasa:",
            locationLabel: "Lokasi:",
            jobLabel: "Pekerjaan:",
            nextButton: "Seterusnya",
            thankYou: "Terima kasih atas rujukan anda!",
            referralMessage1: "Seiring pertumbuhan kami di Malaysia, menjadi #MoreTogether ketika kami #ElevateAsia, berikut adalah pautan yang dapat digunakan teman Anda sehingga ini ditandai ke profil Anda di Sistem Perekrutan kami.",
            shareWhatsApp: "Berkongsi melalui WhatsApp",
            shareLine: "Berkongsi melalui Line",
            scanCodeMessage: "atau biarkan teman anda memindai kod di atas!",
            vrMessage: "Mereka boleh melawat lokasi kami dalam VR, jadi mereka belajar tentang kami:",
            talentTeamMessage: "Pasukan Tarikan Bakat"
        },
        mandarin: {
            chooseLanguage: "选择您的语言：",
            enterBMS: "输入您的BMS ID",
            chooseYourReferrerPreferred: "选择您的推荐人喜欢的",
            languageLabel: "语言：",
            locationLabel: "位置：",
            jobLabel: "工作：",
            nextButton: "下一步",
            thankYou: "感谢您的推荐！",
            referralMessage1: "随着我们进入马来西亚，成为#MoreTogether当我们#ElevateAsia, 这是您的朋友可以使用的链接，因此这将标记到我们的招聘系统中您的个人资料。",
            shareWhatsApp: "通过WhatsApp分享",
            shareLine: "通过Line分享",
            scanCodeMessage: "或让您的朋友扫描上面的代码！",
            vrMessage: "他们可以访问我们在VR的位置，这样他们可以了解我们:",
            talentTeamMessage: "人才吸引团队"
        },
       
        japanese: {
     chooseLanguage: "言語を選択:",
        enterBMS: "BMS IDを入力してください",
        chooseYourReferrerPreferred: "紹介者の好みを選択してください",
        languageLabel: "言語:",
        locationLabel: "場所:",
        jobLabel: "職種:",
        nextButton: "次へ",
        thankYou: "紹介ありがとうございます！",
        referralMessage: "当社の採用システムにおいて、友人が使用できるリンクがあなたのプロフィールにタグ付けされています。マレーシアでの成長に伴い、#MoreTogether #ElevateAsiaとともに",
        shareWhatsApp: "WhatsAppで共有する",
        shareLine: "Lineで共有する",
        qrCodeMessage: "または、以下のコードを友人にスキャンしてもらってください！",
        vrMessage: "VRの場所を訪れて学んでください:",
        talentTeamMessage: "タレントアトラクションチーム"
    }     };

    return translations[language];
}

// Update page content based on selected language
function updatePageContent(language) {
    const translations = translate(language);

    // Update labels and texts
    document.querySelector(".language-selection label").textContent = translations.chooseLanguage;
    document.querySelector("#step1 h2").textContent = translations.enterBMS;
    document.querySelector("#bms-id").placeholder = translations.enterBMS;
    document.querySelectorAll("#step1 h2")[1].textContent = translations.chooseYourReferrerPreferred;

    document.querySelectorAll("#step1 h3")[0].textContent = translations.languageLabel;
    document.querySelectorAll("#step1 h3")[1].textContent = translations.locationLabel;
    document.querySelectorAll("#step1 h3")[2].textContent = translations.jobLabel;
    document.querySelector("#step1 button").textContent = translations.nextButton;

    document.querySelector("#step2 h2").textContent = translations.thankYou;
    document.querySelector("#step2 p:nth-of-type(1)").textContent = translations.referralMessage1;
    document.querySelector("#share-button-whatsapp").textContent = translations.shareWhatsApp;
    document.querySelector("#share-button-line").textContent = translations.shareLine;
    document.querySelector("#qrBox button").textContent = translations.scanCodeMessage;
    document.querySelector("#step2 h2:nth-of-type(2)").textContent = translations.vrMessage;
    document.querySelector("#step2 p:nth-of-type(2)").textContent = translations.talentTeamMessage;

    // Update options in select elements
    updateLanguageSelectOptions();
    
}

// Update language select options

// Add 'test' in the languages array



const languageData = {

 


  Cloud_Campus:{
    locations: ['Penang', 'KL', 'Work-From-Home'],
    jobTypes: {
        
        'Work-From-Home': ['IN-KR-WFH', 'IN-JP-WFH','IN-JP-WFH','IN-TH-WFH', 'IN-EN-WFH', 'IN-MN-WFH']
    }
  },
    korean: {
        locations: ['Penang', 'KL', 'Work-From-Home'],
        jobTypes: {
            'Penang': ['CSS-KR-PE', 'AML-KR-PE', 'CM-KR-PE', 'TSS-KR-PE', 'ISR-KR-PE'],
            'KL': ['CSS-KR-KL', 'AML-KR-KL', 'CM-KR-KL', 'TSS-KR-KL', 'ISR-KR-KL'],
            'Work-From-Home': ['IN-KR-WFH']
        }
    },
    japanese: {
        locations: ['Penang', 'KL', 'Work-From-Home'],
        jobTypes: {
            'Penang': ['CSS-JP-PE', 'AML-JP-PE', 'CM-JP-PE', 'TSS-JP-PE', 'ISR-JP-PE'],
            'KL': ['CSS-JP-KL', 'AML-JP-KL', 'CM-JP-KL', 'TSS-JP-KL', 'ISR-JP-KL'],
            'Work-From-Home': ['IN-JP-WFH']
        }
    },
    malay: {
        locations: ['Penang'],
        jobTypes: {
            'Penang': ['ASA-MY-PE', 'SA-MY-PE']
        }
    },
    thai: {
        locations: ['Penang', 'KL', 'Work-From-Home'],
        jobTypes: {
            'Penang': ['CSS-TH-PE', 'AML-TH-PE', 'CM-TH-PE', 'TSS-TH-PE', 'ISR-TH-PE'],
            'KL': ['CSS-TH-KL', 'AML-TH-KL', 'CM-TH-KL', 'TSS-TH-KL', 'ISR-TH-KL'],
            'Work-From-Home': ['IN-TH-WFH']
        }
    },
 
    other: {
        locations: ['Penang', 'KL', 'Work-From-Home'],
        jobTypes: {
            'Penang': [
                'CSS-Arabic-Penang',
                'ContMod-Arabic-Penang',
                'TechSupSpec-Arabic-Penang',
                'CSS-Burmese-Penang',
                'ContMod-Burmese-Penang',
                'TechSupSpec-Burmese-Penang',
                'CSS-Cantonese-Penang',
                'ContMod-Cantonese-Penang',
                'TechSupSpec-Cantonese-Penang',
                'Interpreter-Cantonese-WFH',
                'ServiceAdvisor-Cantonese-Penang',
                'CSS-Khmer-Penang',
                'ContMod-Khmer-Penang',
                'TechSupSpec-Khmer-Penang',
                'CSS-Lao-Penang',
                'ContMod-Lao-Penang',
                'TechSupSpec-Lao-Penang',
                'CSS-Portuguese-Penang',
                'ContMod-Portuguese-Penang',
                'TechSupSpec-Portuguese-Penang',
                'CSS-Russian-Penang',
                'ContMod-Russian-Penang',
                'TechSupSpec-Russian-Penang',
                'CSS-Tagalog-KL',
                'ContMod-Tagalog-KL',
                'CSS-Taiwanese-Penang',
                'ContMod-Taiwanese-Penang',
                'TechSupSpec-Taiwanese-Penang',
                'CSS-Tamil-Penang',
                'ContMod-Tamil-Penang',
                'TechSupSpec-Tamil-Penang',
                'CSS-Vietnamese-KL',
                'ContMod-Vietnamese-Penang',
                'TechSupSpec-Vietnamese-Penang',
            ],
            'KL': [
                'AML-Arabic-KL',
                'TechSupSpec-Arabic-KL',
                'TechSupSpec-Arabic-KL',
                'InboundSalesRep-Arabic-KL',
                'TechSupSpec-Burmese-KL',
                'InboundSalesRep-Burmese-KL',
                'AML-Cantonese-KL',
                'TechSupSpec-Cantonese-KL',
                'InboundSalesRep-Cantonese-KL',
                'TechSupSpec-Khmer-KL',
                'InboundSalesRep-Khmer-KL',
                'AML-Lao-KL',
                'TechSupSpec-Lao-KL',
                'InboundSalesRep-Lao-KL',
                'AML-Portuguese-KL',
                'TechSupSpec-Portuguese-KL',
                'InboundSalesRep-Portuguese-KL',
                'AML-Russian-KL',
                'TechSupSpec-Russian-KL',
                'InboundSalesRep-Russian-KL',
                'AML-Tagalog-Penang',
                'TechSupSpec-Tagalog-KL',
                'InboundSalesRep-Tagalog-Penang',
                'AML-Taiwanese-KL',
                'TechSupSpec-Taiwanese-KL',
                'InboundSalesRep-Taiwanese-KL',
                'AML-Tamil-KL',
                'TechSupSpec-Tamil-KL',
                'InboundSalesRep-Tamil-KL',
                'AML-Vietnamese-KL',
                'TechSupSpec-Vietnamese-KL',
            ],
            'Work-From-Home': [
                'Interpreter-Arabic-WFH',
                'Interpreter-Cantonese-WFH',
                'Interpreter-Khmer-WFH',
                'Interpreter-Lao-WFH',
                'Interpreter-Portuguese-WFH',
                'Interpreter-Russian-WFH',
                'Interpreter-Tagalog-WFH',
                'Interpreter-Tamil-WFH',
                'Interpreter-Vietnamese-WFH',
            ]
        }
        
    },
    
  
    english: {
        locations: ['Penang', 'KL', 'Work-From-Home'],
        jobTypes: {
            'Penang': ['CSS-EN-PE', 'AML-EN-PE', 'CM-EN-PE', 'TSS-EN-PE', 'ISR-EN-PE'],
            'KL': ['CSS-EN-KL', 'AML-EN-KL', 'CM-EN-KL', 'TSS-EN-KL', 'ISR-EN-KL'],
            'Work-From-Home': ['IN-EN-WFH']
        }
    },
    mandarin: {
        locations: ['Penang', 'KL', 'Work-From-Home'],
        jobTypes: {
            'Penang': ['CSS-MN-PE', 'AML-MN-PE', 'CM-MN-PE', 'TSS-MN-PE', 'ISR-MN-PE'],
            'KL': ['CSS-MN-KL', 'AML-MN-KL', 'CM-MN-KL', 'TSS-MN-KL', 'ISR-MN-KL'],
            'Work-From-Home': ['IN-MN-WFH']
        }
    }
    
};
 

 
const jobOffersReferralLinks = {
    'CSS-KR-PE': 'https://careerseng-teleperformance.icims.com/jobs/49422/customer-success-specialist---korean---penang/job?mode=job&iis=RAF&iisn=',
    'CSS-KR-KL': 'https://careerseng-teleperformance.icims.com/jobs/49427/customer-success-specialist---korean---kl/job?mode=job&iis=RAF&iisn=',
    'AML-KR-PE': 'https://careerseng-teleperformance.icims.com/jobs/49452/anti-money-laundering-%28aml%29---korean---penang/job?mode=job&iis=RAF&iisn=',
    'AML-KR-KL': 'https://careerseng-teleperformance.icims.com/jobs/49470/anti-money-laundering-%28aml%29---korean---kl/job?mode=job&iis=RAF&iisn=',
    'CM-KR-PE': 'https://careerseng-teleperformance.icims.com/jobs/49891/content-moderator---korean---penang/job?mode=job&iis=RAF&iisn=',
    'CM-KR-KL': 'https://careerseng-teleperformance.icims.com/jobs/49894/content-moderator---korean---kl/job?mode=job&iis=RAF&iisn=',
    'TSS-KR-PE': 'https://careerseng-teleperformance.icims.com/jobs/49502/technical-support-specialist---korean---penang/job?mode=job&iis=RAF&iisn=',
    'TSS-KR-KL': 'https://careerseng-teleperformance.icims.com/jobs/49503/technical-support-specialist---korean---kl/job?mode=job&iis=RAF&iisn=',
    'ISR-KR-PE': 'https://careerseng-teleperformance.icims.com/jobs/49494/inbound-sales-representative---korean---penang/job?mode=job&iis=RAF&iisn=',
    'ISR-KR-KL': 'https://careerseng-teleperformance.icims.com/jobs/49496/inbound-sales-representative---korean---kl/job?mode=job&iis=RAF&iisn=',
    'IN-KR-WFH': 'https://careerseng-teleperformance.icims.com/jobs/49546/interpreter---korean---work-from-home/job?mode=job&iis=RAF&iisn=',
    
    'CSS-JP-PE': 'https://careerseng-teleperformance.icims.com/jobs/49432/customer-success-specialist---japanese---penang/job?mode=job&iis=RAF&iisn=',
    'CSS-JP-KL': 'https://careerseng-teleperformance.icims.com/jobs/49429/customer-success-specialist---japanese---kl/job?mode=job&iis=RAF&iisn=',
    'AML-JP-PE': 'https://careerseng-teleperformance.icims.com/jobs/49451/anti-money-laundering-%28aml%29---japanese---penang/job?mode=job&iis=RAF&iisn=',
    'AML-JP-KL': 'https://careerseng-teleperformance.icims.com/jobs/49461/anti-money-laundering-%28aml%29---japanese---kl/job?mode=job&iis=RAF&iisn=',
    'CM-JP-PE': 'https://careerseng-teleperformance.icims.com/jobs/49890/content-moderator---japanese---penang/job?mode=job&iis=RAF&iisn=',
    'CM-JP-KL': 'https://careerseng-teleperformance.icims.com/jobs/49892/content-moderator---japanese---kl/job?mode=job&iis=RAF&iisn=',
    'TSS-JP-PE': 'https://careerseng-teleperformance.icims.com/jobs/49501/technical-support-specialist---japanese---penang/job?mode=job&iis=RAF&iisn=',
    'TSS-JP-KL': 'https://careerseng-teleperformance.icims.com/jobs/49503/technical-support-specialist---japanese---kl/job?mode=job&iis=RAF&iisn=',
    'ISR-JP-PE': 'https://careerseng-teleperformance.icims.com/jobs/49493/inbound-sales-representative---japanese---penang/job?mode=job&iis=RAF&iisn=',
    'ISR-JP-KL': 'https://careerseng-teleperformance.icims.com/jobs/49628/inbound-sales-representative---japanese---kl/job?mode=job&iis=RAF&iisn=',
    'IN-JP-WFH': 'https://careerseng-teleperformance.icims.com/jobs/49545/interpreter---japanese---work-from-home/job?mode=job&iis=RAF&iisn=',
     'SA-MY-PE': 'https://career5.ngteleperformance.icims.com/jobs/42690/service-advisor---malay---penang/job?mode=job&iis=RAF&iisn=',
    'ASA-MY-PE': 'https://career5.ngteleperformance.icims.com/jobs/42693/assisted-sales-advisor---malay---penang/job?mode=job&iis=RAF&iisn=',
 
    'CSS-EN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49424/customer-success-specialist---english---kl/job?mode=job&iis=RAF&iisn=',
    'CSS-EN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49423/customer-success-specialist---english---penang/job?mode=job&iis=RAF&iisn=',
    'AML-EN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49255/anti-money-laundering-%28aml%29---english---kl/job?mode=job&iis=RAF&iisn=',
    'AML-EN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49256/anti-money-laundering-%28aml%29---english---penang/job?mode=job&iis=RAF&iisn=',
    'CM-EN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49401/content-moderator---english---kl/job?mode=job&iis=RAF&iisn=',
    'CM-EN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49399/content-moderator---english---penang/job?mode=job&iis=RAF&iisn=',
    'TSS-EN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49403/technical-support-specialist---english---kl/job?mode=job&iis=RAF&iisn=',
    'TSS-EN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49402/technical-support-specialist---english---penang/job?mode=job&iis=RAF&iisn=',
    'ISR-EN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49406/inbound-sales-representative---english---kl/job?mode=job&iis=RAF&iisn=',
    'ISR-EN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49404/inbound-sales-representative---english---penang/job?mode=job&iis=RAF&iisn=',
    'IN-EN-WFH': 'https://careerseng-teleperformance.icims.com/jobs/49407/interpreter---english---work-from-home/job?mode=job&iis=RAF&iisn=',
    'CSS-MN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49438/customer-success-specialist---mandarin---kl/job?mode=job&iis=RAF&iisn=',
    'CSS-MN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49435/customer-success-specialist---mandarin---penang/job?mode=job&iis=RAF&iisn=',
    'AML-MN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49479/anti-money-laundering-%28aml%29---mandarin---kl/job?mode=job&iis=RAF&iisn=',
    'AML-MN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49477/anti-money-laundering-%28aml%29---mandarin---penang/job?mode=job&iis=RAF&iisn=',
    'CM-MN-KL': 'https://career5.ngteleperformance.icims.com/jobs/49580/content-moderator---mandarin---kl/job?mode=job&iis=RAF&iisn=',


    'CM-MN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49554/content-moderator---mandarin---penang/job?mode=job&iis=RAF&iisn=',
    'TSS-MN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49573/technical-support-specialist---mandarin---kl/job?mode=job&iis=RAF&iisn=',
    'TSS-MN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49501/technical-support-specialist---mandarin---penang/job?mode=job&iis=RAF&iisn=',
    'ISR-MN-KL': 'https://careerseng-teleperformance.icims.com/jobs/49500/inbound-sales-representative---mandarin---kl/job?mode=job&iis=RAF&iisn=',
    'ISR-MN-PE': 'https://careerseng-teleperformance.icims.com/jobs/49494/inbound-sales-representative---mandarin---penang/job?mode=job&iis=RAF&iisn=',
    'IN-MN-WFH': 'https://careerseng-teleperformance.icims.com/jobs/49546/interpreter---mandarin---work-from-home/job?mode=job&iis=RAF&iisn=',
 
 
 
    'CSS-TH-PE': 'https://careerseng-teleperformance.icims.com/jobs/49432/customer-success-specialist---thai---penang/job?mode=job&iis=RAF&iisn=',
    'CSS-TH-KL': 'https://careerseng-teleperformance.icims.com/jobs/49429/customer-success-specialist---thai---kl/job?mode=job&iis=RAF&iisn=',
    'AML-TH-PE': 'https://careerseng-teleperformance.icims.com/jobs/49453/anti-money-laundering-%28aml%29---thai---penang/job?mode=job&iis=RAF&iisn=',
    'AML-TH-KL': 'https://careerseng-teleperformance.icims.com/jobs/49461/anti-money-laundering-%28aml%29---thai---kl/job?mode=job&iis=RAF&iisn=',
    'CM-TH-PE': 'https://careerseng-teleperformance.icims.com/jobs/49892/content-moderator---thai---penang/job?mode=job&iis=RAF&iisn=',
    'CM-TH-KL': 'https://careerseng-teleperformance.icims.com/jobs/49894/content-moderator---thai---kl/job?mode=job&iis=RAF&iisn=',
    'TSS-TH-PE': 'https://careerseng-teleperformance.icims.com/jobs/49502/technical-support-specialist---thai---penang/job?mode=job&iis=RAF&iisn=',
    'TSS-TH-KL': 'https://careerseng-teleperformance.icims.com/jobs/49504/technical-support-specialist---thai---kl/job?mode=job&iis=RAF&iisn=',
    'ISR-TH-PE': 'https://careerseng-teleperformance.icims.com/jobs/49503/inbound-sales-representative---thai---penang/job?mode=job&iis=RAF&iisn=',
    'ISR-TH-KL': 'https://careerseng-teleperformance.icims.com/jobs/49630/inbound-sales-representative---thai---kl/job?mode=job&iis=RAF&iisn=',
    'IN-TH-WFH': 'https://careerseng-teleperformance.icims.com/jobs/49547/interpreter---thai---work-from-home/job?mode=job&iis=RAF&iisn=',
 

    'CSS-Arabic-Penang': 'https://careerseng.teleperformance.iims.com/job/49434/customer-success-specialist---arabic---penang/?mode=job&iis=RAF&iisn=',
    'AML-Arabic-KL': 'https://careerseng.teleperformance.iims.com/job/49474/anti-money-laundering-(aml)---arabic---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Arabic-Penang': 'https://careerseng.teleperformance.iims.com/job/49677/content-moderator---arabic---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Arabic-Penang': 'https://careerseng.teleperformance.iims.com/job/49562/technical-support-specialist---arabic---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Arabic-KL': 'https://careerseng.teleperformance.iims.com/job/49782/technical-support-specialist---arabic---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Arabic-KL': 'https://careerseng.teleperformance.iims.com/job/49693/inbound-sales-representative---arabic---kl/?mode=job&iis=RAF&iisn=',
    'Interpreter-Arabic-WFH': 'https://careerseng.teleperformance.iims.com/job/49659/interpreter---arabic---work-from-home/?mode=job&iis=RAF&iisn=',

    'CSS-Burmese-Penang': 'https://careerseng.teleperformance.iims.com/job/49500/customer-success-specialist---burmese---penang/?mode=job&iis=RAF&iisn=',
    'AML-Burmese-KL': 'https://careerseng.teleperformance.iims.com/job/49487/anti-money-laundering-(aml)---burmese---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Burmese-Penang': 'https://careerseng.teleperformance.iims.com/job/49705/content-moderator---burmese---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Burmese-Penang': 'https://careerseng.teleperformance.iims.com/job/49568/technical-support-specialist---burmese---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Burmese-KL': 'https://careerseng.teleperformance.iims.com/job/49588/technical-support-specialist---burmese---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Burmese-KL': 'https://careerseng.teleperformance.iims.com/job/49643/inbound-sales-representative---burmese---kl/?mode=job&iis=RAF&iisn=',

    'CSS-Cantonese-Penang': 'https://careerseng.teleperformance.iims.com/job/49440/customer-success-specialist---cantonese---penang/?mode=job&iis=RAF&iisn=',
    'AML-Cantonese-KL': 'https://careerseng.teleperformance.iims.com/job/49480/anti-money-laundering-(aml)---cantonese---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Cantonese-Penang': 'https://careerseng.teleperformance.iims.com/job/49560/content-moderator---cantonese---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Cantonese-Penang': 'https://careerseng.teleperformance.iims.com/job/49555/technical-support-specialist---cantonese---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Cantonese-KL': 'https://careerseng.teleperformance.iims.com/job/49561/technical-support-specialist---cantonese---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Cantonese-KL': 'https://careerseng.teleperformance.iims.com/job/49636/inbound-sales-representative---cantonese---kl/?mode=job&iis=RAF&iisn=',
    'Interpreter-Cantonese-WFH': 'https://careerseng.teleperformance.iims.com/job/49670/interpreter---cantonese---work-from-home/?mode=job&iis=RAF&iisn=',
    'ServiceAdvisor-Cantonese-Penang': 'https://careerseng.teleperformance.iims.com/job/49692/service-advisor---cantonese---penang/?mode=job&iis=RAF&iisn=',


    'CSS-Khmer-Penang': 'https://careerseng.teleperformance.iims.com/job/49434/customer-success-specialist---khmer---penang/?mode=job&iis=RAF&iisn=',
    'AML-Khmer-KL': 'https://careerseng.teleperformance.iims.com/job/49485/anti-money-laundering-(aml)---khmer---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Khmer-Penang': 'https://careerseng.teleperformance.iims.com/job/49505/content-moderator---khmer---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Khmer-Penang': 'https://careerseng.teleperformance.iims.com/job/49556/technical-support-specialist---khmer---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Khmer-KL': 'https://careerseng.teleperformance.iims.com/job/49561/technical-support-specialist---khmer---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Khmer-KL': 'https://careerseng.teleperformance.iims.com/job/49641/inbound-sales-representative---khmer---kl/?mode=job&iis=RAF&iisn=',
    'Interpreter-Khmer-WFH': 'https://careerseng.teleperformance.iims.com/job/49630/interpreter---khmer---work-from-home/?mode=job&iis=RAF&iisn=',
    'ServiceAdvisor-Indonesian-Penang': 'https://careerseng.teleperformance.iims.com/job/49691/service-advisor---indonesian---penang/?mode=job&iis=RAF&iisn=',


    'CSS-Lao-Penang': 'https://careerseng.teleperformance.iims.com/job/49495/customer-success-specialist---lao---penang/?mode=job&iis=RAF&iisn=',
    'AML-Lao-KL': 'https://careerseng.teleperformance.iims.com/job/49496/anti-money-laundering-(aml)---lao---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Lao-Penang': 'https://careerseng.teleperformance.iims.com/job/49504/content-moderator---lao---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Lao-Penang': 'https://careerseng.teleperformance.iims.com/job/49556/technical-support-specialist---lao---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Lao-KL': 'https://careerseng.teleperformance.iims.com/job/49587/technical-support-specialist---lao---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Lao-KL': 'https://careerseng.teleperformance.iims.com/job/49622/inbound-sales-representative---lao---kl/?mode=job&iis=RAF&iisn=',
    'Interpreter-Lao-WFH': 'https://careerseng.teleperformance.iims.com/job/49604/interpreter---lao---work-from-home/?mode=job&iis=RAF&iisn=',


    'CSS-Portuguese-Penang': 'https://careerseng.teleperformance.iims.com/job/49436/customer-success-specialist---portuguese---penang/?mode=job&iis=RAF&iisn=',
    'AML-Portuguese-KL': 'https://careerseng.teleperformance.iims.com/job/49468/anti-money-laundering-(aml)---portuguese---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Portuguese-Penang': 'https://careerseng.teleperformance.iims.com/job/49504/content-moderator---portuguese---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Portuguese-Penang': 'https://careerseng.teleperformance.iims.com/job/49559/technical-support-specialist---portuguese---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Portuguese-KL': 'https://careerseng.teleperformance.iims.com/job/49560/technical-support-specialist---portuguese---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Portuguese-Penang': 'https://careerseng.teleperformance.iims.com/job/49624/inbound-sales-representative---portuguese---penang/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Portuguese-KL': 'https://careerseng.teleperformance.iims.com/job/49644/inbound-sales-representative---portuguese---kl/?mode=job&iis=RAF&iisn=',
    'Interpreter-Portuguese-WFH': 'https://careerseng.teleperformance.iims.com/job/49605/interpreter---portuguese---work-from-home/?mode=job&iis=RAF&iisn=',


    'CSS-Russian-Penang': 'https://careerseng.teleperformance.iims.com/job/49487/customer-success-specialist---russian---penang/?mode=job&iis=RAF&iisn=',
    'AML-Russian-KL': 'https://careerseng.teleperformance.iims.com/job/49489/anti-money-laundering-(aml)---russian---kl/?mode=job&iis=RAF&iisn=',
    'ContMod-Russian-Penang': 'https://careerseng.teleperformance.iims.com/job/49480/content-moderator---russian---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Russian-Penang': 'https://careerseng.teleperformance.iims.com/job/49570/technical-support-specialist---russian---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Russian-KL': 'https://careerseng.teleperformance.iims.com/job/49580/technical-support-specialist---russian---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Russian-KL': 'https://careerseng.teleperformance.iims.com/job/49625/inbound-sales-representative---russian---kl/?mode=job&iis=RAF&iisn=',
    'Interpreter-Russian-WFH': 'https://careerseng.teleperformance.iims.com/job/49606/interpreter---russian---work-from-home/?mode=job&iis=RAF&iisn=',


    'CSS-Tagalog-KL': 'https://careerseng.teleperformance.iims.com/job/49431/customer-success-specialist---tagalog---kl/?mode=job&iis=RAF&iisn=',
    'AML-Tagalog-Penang': 'https://careerseng.teleperformance.iims.com/job/49475/anti-money-laundering-(aml)---tagalog---penang/?mode=job&iis=RAF&iisn=',
    'ContMod-Tagalog-Penang': 'https://careerseng.teleperformance.iims.com/job/49676/content-moderator---tagalog---penang/?mode=job&iis=RAF&iisn=',
    'TechSupSpec-Tagalog-KL': 'https://careerseng.teleperformance.iims.com/job/49577/technical-support-specialist---tagalog---kl/?mode=job&iis=RAF&iisn=',
    'InboundSalesRep-Tagalog-Penang': 'https://careerseng.teleperformance.iims.com/job/49672/inbound-sales-representative---tagalog---penang/?mode=job&iis=RAF&iisn=',
    'Interpreter-Tagalog-WFH': 'https://careerseng.teleperformance.iims.com/job/49657/interpreter---tagalog---work-from-home/?mode=job&iis=RAF&iisn=',
    'ContMod-Tagalog-KL': 'https://careerseng.teleperformance.iims.com/job/49515/content-moderator---tagalog---kl/?mode=job&iis=RAF&iisn=',

 
        'CSS-Taiwanese-Penang': 'https://careerseng.teleperformance.iims.com/job/49442/customer-success-specialist---taiwanese---penang/?mode=job&iis=RAF&iisn=',
        'AML-Taiwanese-KL': 'https://careerseng.teleperformance.iims.com/job/49481/anti-money-laundering-(aml)---taiwanese---kl/?mode=job&iis=RAF&iisn=',
        'ContMod-Taiwanese-Penang': 'https://careerseng.teleperformance.iims.com/job/49491/content-moderator---taiwanese---penang/?mode=job&iis=RAF&iisn=',
        'TechSupSpec-Taiwanese-Penang': 'https://careerseng.teleperformance.iims.com/job/49556/technical-support-specialist---taiwanese---penang/?mode=job&iis=RAF&iisn=',
        'TechSupSpec-Taiwanese-KL': 'https://careerseng.teleperformance.iims.com/job/49561/technical-support-specialist---taiwanese---kl/?mode=job&iis=RAF&iisn=',
        'InboundSalesRep-Taiwanese-KL': 'https://careerseng.teleperformance.iims.com/job/49637/inbound-sales-representative---taiwanese---kl/?mode=job&iis=RAF&iisn=',
        'CSS-Tamil-Penang': 'https://careerseng.teleperformance.iims.com/job/49492/customer-success-specialist---tamil---penang/?mode=job&iis=RAF&iisn=',
        'AML-Tamil-KL': 'https://careerseng.teleperformance.iims.com/job/49483/anti-money-laundering-(aml)---tamil---kl/?mode=job&iis=RAF&iisn=',
        'ContMod-Tamil-Penang': 'https://careerseng.teleperformance.iims.com/job/49480/content-moderator---tamil---penang/?mode=job&iis=RAF&iisn=',
        'TechSupSpec-Tamil-Penang': 'https://careerseng.teleperformance.iims.com/job/49562/technical-support-specialist---tamil---penang/?mode=job&iis=RAF&iisn=',
        'TechSupSpec-Tamil-KL': 'https://careerseng.teleperformance.iims.com/job/49584/technical-support-specialist---tamil---kl/?mode=job&iis=RAF&iisn=',
        'InboundSalesRep-Tamil-KL': 'https://careerseng.teleperformance.iims.com/job/49639/inbound-sales-representative---tamil---kl/?mode=job&iis=RAF&iisn=',
     
     
        'Interpreter-Tamil-WFH': 'https://careerseng.teleperformance.iims.com/job/49601/interpreter---tamil---work-from-home/?mode=job&iis=RAF&iisn=',

        'CSS-Vietnamese-KL': 'https://careerseng.teleperformance.iims.com/job/49430/customer-success-specialist---vietnamese---kl/?mode=job&iis=RAF&iisn=',
        'AML-Vietnamese-KL': 'https://careerseng.teleperformance.iims.com/job/49474/anti-money-laundering-(aml)---vietnamese---kl/?mode=job&iis=RAF&iisn=',
        'ContMod-Vietnamese-Penang': 'https://careerseng.teleperformance.iims.com/job/49437/content-moderator---vietnamese---penang/?mode=job&iis=RAF&iisn=',
        'TechSupSpec-Vietnamese-Penang': 'https://careerseng.teleperformance.iims.com/job/49556/technical-support-specialist---vietnamese---penang/?mode=job&iis=RAF&iisn=',
        'TechSupSpec-Vietnamese-KL': 'https://careerseng.teleperformance.iims.com/job/49576/technical-support-specialist---vietnamese---kl/?mode=job&iis=RAF&iisn=',
        'InboundSalesRep-Vietnamese-Penang': 'https://careerseng.teleperformance.iims.com/job/49631/inbound-sales-representative---vietnamese---penang/?mode=job&iis=RAF&iisn=',
        'Interpreter-Vietnamese-WFH': 'https://careerseng.teleperformance.iims.com/job/49548/interpreter---vietnamese---work-from-home/?mode=job&iis=RAF&iisn='

    };
 

// Event listener for language changes
document.getElementById("emp-lang-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    updatePageContent(selectedLanguage);
});

// Simulated job titles object

const jobTitles = {
 
    'CSS-KR-PE': {
        korean: 'Customer Success Specialist - Korean - Penang',
     },
    'CSS-KR-KL': {
        korean: 'Customer Success Specialist - Korean - KL',
     },
    'AML-KR-PE': {
        korean: 'Anti-Money-Laundering (AML) - Korean - Penang',
     },
    'AML-KR-KL': {
        korean: 'Anti-Money-Laundering (AML) - Korean - KL',
     },
    'CM-KR-PE': {
        korean: 'Content Moderator - Korean - Penang',
     },
    'CM-KR-KL': {
        korean: 'Content Moderator - Korean - KL',
     },
    'TSS-KR-PE': {
        korean: 'Technical Support Specialist - Korean - Penang',
     },
    'TSS-KR-KL': {
        korean: 'Technical Support Specialist - Korean - KL',
     },
    'ISR-KR-PE': {
        korean: 'Inbound Sales Representative - Korean - Penang',
     },
    'ISR-KR-KL': {
        korean: 'Inbound Sales Representative - Korean - KL',
     },
    'IN-KR-WFH': {
        korean: 'Interpreter - Korean - Work-From-Home',
     },
    
    'CSS-JP-PE': {
        japanese: 'Customer Success Specialist - Japanese - Penang',
     },
    'CSS-JP-KL': {
         japanese: 'Customer Success Specialist - Japanese - KL',
     },
    'AML-JP-PE': {
         japanese: 'Anti-Money-Laundering (AML) - Japanese - Penang',
     },
    'AML-JP-KL': {
         japanese: 'Anti-Money-Laundering (AML) - Japanese - KL',
     },
    'CM-JP-PE': {
         japanese: 'Content Moderator - Japanese - Penang',
     },
    'CM-JP-KL': {
         japanese: 'Content Moderator - Japanese - KL',
     },
    'TSS-JP-PE': {
         japanese: 'Technical Support Specialist - Japanese - Penang',
     },
    'TSS-JP-KL': {
         japanese: 'Technical Support Specialist - Japanese - KL',
     },
    'ISR-JP-PE': {
         japanese: 'Inbound Sales Representative - Japanese - Penang',
     },
    'ISR-JP-KL': {
         japanese: 'Inbound Sales Representative - Japanese - KL',
     },
    'IN-JP-WFH': {
         japanese: 'Interpreter - Japanese - Work-From-Home',
     },
    'ASA-MY-PE': {
        malay: 'Assisted Sales Advisor - Malay - Penang',
     },
    'SA-MY-PE': { 

      malay: 'Service Advisor - Malay - Penang',
     },
  
    'CSS-EN-KL': {
        english: 'Customer Success Specialist - English - KL'
    },
    'CSS-EN-PE': {
        english: 'Customer Success Specialist - English - Penang'
    },
    'AML-EN-KL': {
        english: 'Anti-Money-Laundering (AML) - English - KL'
    },
    'AML-EN-PE': {
        english: 'Anti-Money-Laundering (AML) - English - Penang'
    },
    'CM-EN-KL': {
        english: 'Content Moderator - English - KL'
    },
    'CM-EN-PE': {
        english: 'Content Moderator - English - Penang'
    },
    'TSS-EN-KL': {
        english: 'Technical Support Specialist - English - KL'
    },
    'TSS-EN-PE': {
        english: 'Technical Support Specialist - English - Penang'
    },
    'ISR-EN-KL': {
        english: 'Inbound Sales Representative - English - KL'
    },
    'ISR-EN-PE': {
        english: 'Inbound Sales Representative - English - Penang'
    },
    'IN-EN-WFH': {
        english: 'Interpreter - English - Work-From-Home'
    },
    'CSS-MN-KL': {
        mandarin: 'Customer Success Specialist - Mandarin - KL',
     },
    'CSS-MN-PE': {
        mandarin: 'Customer Success Specialist - Mandarin - Penang',
     },
    'AML-MN-KL': {
        mandarin: 'Anti-Money-Laundering (AML) - Mandarin - KL',
     },
    'AML-MN-PE': {
        mandarin: 'Anti-Money-Laundering (AML) - Mandarin - Penang',
     },
    'CM-MN-KL': {
        mandarin: 'Content Moderator - Mandarin - KL',
     },
    'CM-MN-PE': {
        mandarin: 'Content Moderator - Mandarin - Penang',
     },
    'TSS-MN-KL': {
        mandarin: 'Technical Support Specialist - Mandarin - KL',
     },
    'TSS-MN-PE': {
        mandarin: 'Technical Support Specialist - Mandarin - Penang',
     },
    'ISR-MN-KL': {
        mandarin: 'Inbound Sales Representative - Mandarin - KL',
     },
    'ISR-MN-PE': {
        mandarin: 'Inbound Sales Representative - Mandarin - Penang',
     },
    'IN-MN-WFH': {
        mandarin: 'Interpreter - Mandarin - Work-From-Home',
     },


    'CSS-TH-PE': {
        thai: 'Customer Success Specialist - Thai - Penang',
     },
    'CSS-TH-KL': {
        thai: 'Customer Success Specialist - Thai - KL',
     },
    'AML-TH-PE': {
        thai: 'Anti-Money-Laundering (AML) - Thai - Penang',
     },
    'AML-TH-KL': {
        thai: 'Anti-Money-Laundering (AML) - Thai - KL',
     },
    'CM-TH-PE': {
        thai: 'Content Moderator - Thai - Penang',
     },
    'CM-TH-KL': {
        thai: 'Content Moderator - Thai - KL',
     },
    'TSS-TH-PE': {
        thai: 'Technical Support Specialist - Thai - Penang',
     },
    'TSS-TH-KL': {
        thai: 'Technical Support Specialist - Thai - KL',
     },
    'ISR-TH-PE': {
        thai: 'Inbound Sales Representative - Thai - Penang',
     },
    'ISR-TH-KL': {
        thai: 'Inbound Sales Representative - Thai - KL',
     },
    'IN-TH-WFH': {
        thai: 'Interpreter - Thai - Work-From-Home',
     },
  
    'CSS-Arabic-Penang': {
        other: 'Customer Success Specialist - Arabic - Penang'
    },
    'AML-Arabic-KL': {
        other: 'Anti-Money-Laundering (AML) - Arabic - KL'
    },
    'ContMod-Arabic-Penang': {
        other: 'Content Moderator - Arabic - Penang'
    },
    'TechSupSpec-Arabic-Penang': {
        other: 'Technical Support Specialist - Arabic - Penang'
    },
    'TechSupSpec-Arabic-KL': {
        other: 'Technical Support Specialist - Arabic - KL'
    },
    'InboundSalesRep-Arabic-KL': {
        other: 'Inbound Sales Representative - Arabic - KL'
    },
    'Interpreter-Arabic-WFH': {
        other: 'Interpreter - Arabic - Work-From-Home'
    },

    'CSS-Burmese-Penang': {
        other: 'Customer Success Specialist - Burmese - Penang'
    },
    'AML-Burmese-KL': {
        other: 'Anti-Money-Laundering (AML) - Burmese - KL'
    },
    'ContMod-Burmese-Penang': {
        other: 'Content Moderator - Burmese - Penang'
    },
    'TechSupSpec-Burmese-Penang': {
        other: 'Technical Support Specialist - Burmese - Penang'
    },
    'TechSupSpec-Burmese-KL': {
        other: 'Technical Support Specialist - Burmese - KL'
    },
    'InboundSalesRep-Burmese-KL': {
        other: 'Inbound Sales Representative - Burmese - KL'
    },


    'CSS-Cantonese-Penang': {
        other: 'Customer Success Specialist - Cantonese - Penang'
    },
    'AML-Cantonese-KL': {
        other: 'Anti-Money-Laundering (AML) - Cantonese - KL'
    },
    'ContMod-Cantonese-Penang': {
        other: 'Content Moderator - Cantonese - Penang'
    },
    'TechSupSpec-Cantonese-Penang': {
        other: 'Technical Support Specialist - Cantonese - Penang'
    },
    'TechSupSpec-Cantonese-KL': {
        other: 'Technical Support Specialist - Cantonese - KL'
    },
    'InboundSalesRep-Cantonese-KL': {
        other: 'Inbound Sales Representative - Cantonese - KL'
    },
    'Interpreter-Cantonese-WFH': {
        other: 'Interpreter - Cantonese - Work-From-Home'
    },
    'ServiceAdvisor-Cantonese-Penang': {
        other: 'Service Advisor - Cantonese - Penang'
    },

    'CSS-Khmer-Penang': {
        other: 'Customer Success Specialist - Khmer - Penang'
    },
    'AML-Khmer-KL': {
        other: 'Anti-Money-Laundering (AML) - Khmer - KL'
    },
    'ContMod-Khmer-Penang': {
        other: 'Content Moderator - Khmer - Penang'
    },
    'TechSupSpec-Khmer-Penang': {
        other: 'Technical Support Specialist - Khmer - Penang'
    },
    'TechSupSpec-Khmer-KL': {
        other: 'Technical Support Specialist - Khmer - KL'
    },
    'InboundSalesRep-Khmer-KL': {
        other: 'Inbound Sales Representative - Khmer - KL'
    },
    'Interpreter-Khmer-WFH': {
        other: 'Interpreter - Khmer - Work-From-Home'
    },
    'ServiceAdvisor-Indonesian-Penang': {
        other: 'Service Advisor - Indonesian - Penang'
    },

    'CSS-Lao-Penang': {
        other: 'Customer Success Specialist - Lao - Penang'
    },
    'AML-Lao-KL': {
        other: 'Anti-Money-Laundering (AML) - Lao - KL'
    },
    'ContMod-Lao-Penang': {
        other: 'Content Moderator - Lao - Penang'
    },
    'TechSupSpec-Lao-Penang': {
        other: 'Technical Support Specialist - Lao - Penang'
    },
    'TechSupSpec-Lao-KL': {
        other: 'Technical Support Specialist - Lao - KL'
    },
    'InboundSalesRep-Lao-KL': {
        other: 'Inbound Sales Representative - Lao - KL'
    },
    'Interpreter-Lao-WFH': {
        other: 'Interpreter - Lao - Work-From-Home'
    },


    'CSS-Portuguese-Penang': {
        other: 'Customer Success Specialist - Portuguese - Penang'
    },
    'AML-Portuguese-KL': {
        other: 'Anti-Money-Laundering (AML) - Portuguese - KL'
    },
    'ContMod-Portuguese-Penang': {
        other: 'Content Moderator - Portuguese - Penang'
    },
    'TechSupSpec-Portuguese-Penang': {
        other: 'Technical Support Specialist - Portuguese - Penang'
    },
    'TechSupSpec-Portuguese-KL': {
        other: 'Technical Support Specialist - Portuguese - KL'
    },
    'InboundSalesRep-Portuguese-Penang': {
        other: 'Inbound Sales Representative - Portuguese - Penang'
    },
    'InboundSalesRep-Portuguese-KL': {
        other: 'Inbound Sales Representative - Portuguese - KL'
    },
    'Interpreter-Portuguese-WFH': {
        other: 'Interpreter - Portuguese - Work-From-Home'
    },


    'CSS-Russian-Penang': {
        other: 'Customer Success Specialist - Russian - Penang'
    },
    'AML-Russian-KL': {
        other: 'Anti-Money-Laundering (AML) - Russian - KL'
    },
    'ContMod-Russian-Penang': {
        other: 'Content Moderator - Russian - Penang'
    },
    'TechSupSpec-Russian-Penang': {
        other: 'Technical Support Specialist - Russian - Penang'
    },
    'TechSupSpec-Russian-KL': {
        other: 'Technical Support Specialist - Russian - KL'
    },
    'InboundSalesRep-Russian-KL': {
        other: 'Inbound Sales Representative - Russian - KL'
    },
    'Interpreter-Russian-WFH': {
        other: 'Interpreter - Russian - Work-From-Home'
    },


    'CSS-Tagalog-KL': {
        other: 'Customer Success Specialist - Tagalog - KL'
    },
    'AML-Tagalog-Penang': {
        other: 'Anti-Money-Laundering (AML) - Tagalog - Penang'
    },
    'ContMod-Tagalog-Penang': {
        other: 'Content Moderator - Tagalog - Penang'
    },
    'TechSupSpec-Tagalog-KL': {
        other: 'Technical Support Specialist - Tagalog - KL'
    },
    'InboundSalesRep-Tagalog-Penang': {
        other: 'Inbound Sales Representative - Tagalog - Penang'
    },
    'Interpreter-Tagalog-WFH': {
        other: 'Interpreter - Tagalog - Work-From-Home'
    },
    'ContMod-Tagalog-KL': {
        other: 'Content Moderator - Tagalog - KL'
    },

    'CSS-Taiwanese-Penang': {
        other: 'Customer Success Specialist - Taiwanese - Penang'
    },
    'AML-Taiwanese-KL': {
        other: 'Anti-Money-Laundering (AML) - Taiwanese - KL'
    },
    'ContMod-Taiwanese-Penang': {
        other: 'Content Moderator - Taiwanese - Penang'
    },
    'TechSupSpec-Taiwanese-Penang': {
        other: 'Technical Support Specialist - Taiwanese - Penang'
    },
    'TechSupSpec-Taiwanese-KL': {
        other: 'Technical Support Specialist - Taiwanese - KL'
    },
    'InboundSalesRep-Taiwanese-KL': {
        other: 'Inbound Sales Representative - Taiwanese - KL'
    },


    'CSS-Tamil-Penang': {
        other: 'Customer Success Specialist - Tamil - Penang'
    },
    'AML-Tamil-KL': {
        other: 'Anti-Money-Laundering (AML) - Tamil - KL'
    },
    'ContMod-Tamil-Penang': {
        other: 'Content Moderator - Tamil - Penang'
    },
    'TechSupSpec-Tamil-Penang': {
        other: 'Technical Support Specialist - Tamil - Penang'
    },
    'TechSupSpec-Tamil-KL': {
        other: 'Technical Support Specialist - Tamil - KL'
    },
    'InboundSalesRep-Tamil-KL': {
        other: 'Inbound Sales Representative - Tamil - KL'
    },
    'Interpreter-Tamil-WFH': {
        other: 'Interpreter - Tamil - Work-From-Home'
    },


 
    'CSS-Tamil-Penang': {
        other: 'Customer Success Specialist - Tamil - Penang'
    },
    'AML-Tamil-KL': {
        other: 'Anti-Money-Laundering (AML) - Tamil - KL'
    },
    'ContMod-Tamil-Penang': {
        other: 'Content Moderator - Tamil - Penang'
    },
    'TechSupSpec-Tamil-Penang': {
        other: 'Technical Support Specialist - Tamil - Penang'
    },
    'TechSupSpec-Tamil-KL': {
        other: 'Technical Support Specialist - Tamil - KL'
    },
    'InboundSalesRep-Tamil-KL': {
        other: 'Inbound Sales Representative - Tamil - KL'
    },
    'Interpreter-Tamil-WFH': {
        other: 'Interpreter - Tamil - Work-From-Home'
    },
    'CSS-Vietnamese-KL': {
        other: 'Customer Success Specialist - Vietnamese - KL'
    },
    'AML-Vietnamese-KL': {
        other: 'Anti-Money-Laundering (AML) - Vietnamese - KL'
    },
    'ContMod-Vietnamese-Penang': {
        other: 'Content Moderator - Vietnamese - Penang'
    },
    'TechSupSpec-Vietnamese-Penang': {
        other: 'Technical Support Specialist - Vietnamese - Penang'
    },
    'TechSupSpec-Vietnamese-KL': {
        other: 'Technical Support Specialist - Vietnamese - KL'
    },
    'InboundSalesRep-Vietnamese-Penang': {
        other: 'Inbound Sales Representative - Vietnamese - Penang'
    },
    'Interpreter-Vietnamese-WFH': {
        other: 'Interpreter - Vietnamese - Work-From-Home'
    },
};
function updateJobTitles(language) {

    const allJobElements = document.querySelectorAll('[data-job-key]');

    allJobElements.forEach(element => {

        const jobKey = element.getAttribute('data-job-key');

        element.textContent = jobTitles[jobKey][language];

    });

}


// Function to directly access and render job titles based on a job code

function renderJobTitle(jobCode) {

    return jobTitles[jobCode];

}
// Update locations dropdown based on selected language
function populateLocations() {
    var empLangSelect = document.getElementById("language-select");
    var selectedLanguage = empLangSelect.options[empLangSelect.selectedIndex].value;
    var locationSelect = document.getElementById("location-select");
    locationSelect.innerHTML = ''; // Clear previous options

    if (languageData[selectedLanguage]) {
        var availableLocations = languageData[selectedLanguage].locations;
        if (availableLocations && availableLocations.length > 0) {
            availableLocations.forEach(location => {
                let option = document.createElement("option");
                option.text = location;
                option.value = location;
                locationSelect.appendChild(option);
            });
        }
    }

    // Call populateJobTypes to refresh job types based on new locations
    populateJobTypes();
}


// This function populates job types dropdown based on selected location
function populateJobTypes() {
    var languageSelect = document.getElementById("language-select");
    var jobLanguage = languageSelect.options[languageSelect.selectedIndex].value;
    var empLangSelect = document.getElementById("emp-lang-select");
    var displayLanguage = empLangSelect.options[empLangSelect.selectedIndex].value;

    var locationSelect = document.getElementById("location-select");
    var selectedLocation = locationSelect.options[locationSelect.selectedIndex].value;
    var jobTypeSelect = document.getElementById("job-type-select");
    jobTypeSelect.innerHTML = '';  // Clear existing entries

    if (languageData[jobLanguage] && languageData[jobLanguage].jobTypes && languageData[jobLanguage].jobTypes[selectedLocation]) {
        languageData[jobLanguage].jobTypes[selectedLocation].forEach(jobCode => {
            var option = document.createElement("option");
            // Get the job title directly from jobTitles without translation
            option.text = jobTitles[jobCode][jobLanguage];
            option.value = jobCode;
            jobTypeSelect.appendChild(option);
        });
    }
}



document.getElementById("location-select").addEventListener("change", function() {
    // Update job types when the location selection changes
    populateJobTypes();
});

// Set event listeners
document.getElementById("emp-lang-select").addEventListener("change", function() {
    // Update locations when the language selection changes
    populateLocations(); // Initial population based on default selected language
});

 
// Assume this is called on page load to populate the initial dropdowns
populateLocations();
    // Function to proceed to Step 2
    function nextStep() {
        var bmsId = document.getElementById("bms-id").value;
        var selectedLanguage = document.getElementById("language-select").value;
        var selectedLocation = document.getElementById("location-select").value;
        var selectedJobType = document.getElementById("job-type-select").value;
    
          // Check if BMS ID contains only numbers
        if (!/^\d+$/.test(bmsId)) {
            alert("Please enter a valid BMS ID (numbers only).");
            return;
        }
        // Generate referral link
    var referralLink = jobOffersReferralLinks[selectedJobType] + bmsId;
    
    // Display link and generate QR code
    document.getElementById("generated-link").innerHTML = `<a href="${referralLink}" target="_blank">${referralLink}</a>`;
    generateQrCode(referralLink);
    
        // Hide Step 1 and show Step 2
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    }
    document.getElementById("share-button-whatsapp").addEventListener("click", function() {
        const message = "Your message here"; // Replace with the message you want to share
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    });
    
    document.getElementById("share-button-line").addEventListener("click", function() {
        const message = "Your message here"; // Replace with the message you want to share
        const lineLink = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
        window.open(lineLink, "_blank");
    });
    
    // Function to generate QR code for the link
    function generateQrCode(link) {
        const qrImg = document.getElementById('qrImg');
        const qrBox = document.getElementById('qrBox');
    
        // Construct the URL for the qrserver.com API
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;
    
        // Generating image
        qrImg.src = apiUrl;
        qrBox.setAttribute("id", "qrBoxGenerated");
    }
    
    // Call populateLocations when language selection changes
    document.getElementById("language-select").addEventListener("change", populateLocations);
    
    // Call populateJobTypes when location selection changes
    document.getElementById("location-select").addEventListener("change", populateJobTypes);
    
    // Initial population of location options based on the default language
    populateLocations();

    
    function refreshPage() {
        location.reload();
    }
