Vue.createApp({
    data() {
        return {
            author: 'myku',
            galleryPictures: [
                './img/gal-1.jpeg',
                './img/gal-2.jpeg',
                './img/gal-3.jpeg',
                './img/gal-4.jpeg',
                './img/gal-5.jpeg',
                './img/gal-6.jpeg',
                './img/gal-7.jpeg',
                './img/gal-8.jpeg',
                './img/gal-9.jpeg',
                './img/gal-10.jpeg',
                './img/gal-11.jpeg',
                './img/gal-12.jpeg',
                './img/gal-13.jpeg',
                './img/gal-14.jpeg'
            ],
            modals: [
                { name: 'yuguard', src: './img/yuguard_detail.PNG', prodName: '貼心片' },
                { name: 'yusound', src: './img/yusound_detail.PNG', prodName: '貼心音' },
                { name: 'yurine', src: './img/yurine_detail.PNG', prodName: '尿檢譯' },
                { name: 'yucloth', src: './img/yucloth_detail.PNG', prodName: '貼心衣' },
                { name: 'yubelt', src: './img/yubelt_detail.PNG',  prodName: '貼心帶' },
                { name: 'yupet', src: './img/yupet_detail.PNG', prodName: '寵心衣' },
                { name: 'trianswer', src: './img/trianswer_detail.PNG', prodName: '試穿戴' }
            ],
            cards: [
                [
                    { catagory: 'medical', name: 'yuguard', src: './img/yuguard.png', prodName: '貼心片', msg: '貼心片是一款長時間心律偵測器全天候的心臟單導程監測，貼心守護。' },
                    { catagory: 'medical', name: 'yusound', src: './img/yusound.png', prodName: '貼心音', msg: '貼心音是一款新型智慧聽診器，心電及心音訊號即時同步顯示，心雜音無所遁形。' },
                    { catagory: 'medical', name: 'yurine', src: './img/yurine.png', prodName: '尿檢譯', msg: '尿檢譯是一款可攜式無線尿液檢測平台，透過尿液檢測即時翻譯您的生理健康。' }
                    
                ],
                [
                    { catagory: 'wearable', name: 'yucloth', src: './img/yucloth.png', prodName: '貼心衣', msg: '貼心衣是一款心律及呼吸監控服飾，提供最方便的量測平台，全天候監控健康。' },
                    { catagory: 'wearable', name: 'yubelt', src: './img/yubelt.png', prodName: '貼心帶', msg: '貼心帶是一款具醫療解析度之心律監控胸帶，任何動作任何角度，全天候精準監控。' },
                    { catagory: 'wearable', name: 'yupet', src: './img/yupet.png', prodName: '寵心衣', msg: '寵心衣是一款適用於寵物的心律及溫度監控服飾，讓主人能更貼近與愛寵之間的距離。' }
                ],
                [
                    { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '試穿戴是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' },
                    { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '試穿戴是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' },
                    { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '試穿戴是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' }
                ]
            ],
            features: [
                { name: 'home care',  src: './img/fea-1.jpg', icon: 'icon-home', title: '居家照護', msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora nulla! Cum totam accusantium expedita accusamus blanditiis deleniti similique officiis eos, impedit eveniet, fuga aliquid earum facilis quibusdam nostrum eligendi.' },
                { name: 'real-time monitor',  src: './img/fea-2.jpg', icon: 'icon-tablet', title: '即時監測', msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora nulla! Cum totam accusantium expedita accusamus blanditiis deleniti similique officiis eos, impedit eveniet, fuga aliquid earum facilis quibusdam nostrum eligendi.' },
                { name: 'high precision diagnostics',  src: './img/fea-3.jpg', icon: 'icon-tools', title: '精準醫療', msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora nulla! Cum totam accusantium expedita accusamus blanditiis deleniti similique officiis eos, impedit eveniet, fuga aliquid earum facilis quibusdam nostrum eligendi.' },
                { name: 'high privacy security',  src: './img/fea-4.jpg', icon: 'icon-v-card', title: '隱私保障', msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora nulla! Cum totam accusantium expedita accusamus blanditiis deleniti similique officiis eos, impedit eveniet, fuga aliquid earum facilis quibusdam nostrum eligendi.' }
            ],
            waterBtns: [
                { name: 'YouTube', icon: 'icon-youtube', href: 'https://www.youtube.com/channel/UCDUCtLte-d7foSL4wNmjoEg' },
                { name: 'GitHub', icon: 'icon-github', href: 'https://github.com/YuTecHealth' }
            ],
            showModals: {
                yuguard: false,
                yusound: false,
                yurine: false,
                yucloth: false,
                yubelt: false,
                yupet: false,
                trianswer: false
            },

            /* typing */
            mainTextTypeArray: ['系統晶片', '穿戴式裝置', '雲端平台'],
            mainTextTypeArrayIdx: 0, 
            mainTextIdx: 0,
            mainTextTypeStatus: false,
            mainText: '',
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,


            /* slide */
            slides: [
                { catagory: 'medical', name: 'yuguard', src: './img/yuguard.png', prodName: '貼心片', msg: '貼心片是一款長時間心律偵測器全天候的心臟單導程監測，貼心守護。' },
                { catagory: 'medical', name: 'yusound', src: './img/yusound.png', prodName: '貼心音', msg: '貼心音是一款新型智慧聽診器，心電及心音訊號即時同步顯示，心雜音無所遁形。' },
                { catagory: 'medical', name: 'yurine', src: './img/yurine.png', prodName: '尿檢譯', msg: '尿檢譯是一款可攜式無線尿液檢測平台，透過尿液檢測即時翻譯您的生理健康。' },
                { catagory: 'wearable', name: 'yucloth', src: './img/yucloth.png', prodName: '貼心衣', msg: '貼心衣是一款心律及呼吸監控服飾，提供最方便的量測平台，全天候監控健康。' },
                { catagory: 'wearable', name: 'yubelt', src: './img/yubelt.png', prodName: '貼心帶', msg: '貼心帶是一款具醫療解析度之心律監控胸帶，任何動作任何角度，全天候精準監控。' },
                { catagory: 'wearable', name: 'yupet', src: './img/yupet.png', prodName: '寵心衣', msg: '寵心衣是一款適用於寵物的心律及溫度監控服飾，讓主人能更貼近與愛寵之間的距離。' },
                { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '試穿戴是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' }  
            ],
            slideDirection: 'in',
            currentSlide: 0,
            slideInterval: null,
            slideSwitchingSpeed: 5000
        };
    },

    mounted() {
        this.startSlideTimer();
    },
    beforeUnmount() {
        this.stopSlideTimer();
    },

    created() {
        setTimeout(this.typeMainText, this.newTextDelay + 200);
    },

    methods: {
        toggleFlag: function(flagKey, evt) {
            this.showModals[flagKey] = !this.showModals[flagKey];
        },
        toggleFlagWithCloseSidebar: function(flagKey, evt) {
            document.querySelector('#navi-toggle + label').click();
            this.toggleFlag(flagKey, evt);
        },

        /* typing */
        typeMainText: function() {
            if(this.mainTextIdx < this.mainTextTypeArray[this.mainTextTypeArrayIdx].length) {
                if(!this.mainTextTypeStatus) {
                    this.mainTextTypeStatus = true;
                }
                this.mainText += this.mainTextTypeArray[this.mainTextTypeArrayIdx].charAt(this.mainTextIdx);
                this.mainTextIdx += 1;

                setTimeout(this.typeMainText, this.typingSpeed);
            } else {
                this.mainTextTypeStatus = false;
                setTimeout(this.eraseMainText, this.newTextDelay);
            }
        },
        eraseMainText: function() {
            if(this.mainTextIdx > 0) {
                if(!this.mainTextTypeStatus) {
                    this.mainTextTypeStatus = true;
                }

                this.mainText = this.mainTextTypeArray[this.mainTextTypeArrayIdx].substring(0, this.mainTextIdx - 1);
                this.mainTextIdx -= 1;
                setTimeout(this.eraseMainText, this.erasingSpeed);
            } else {
                this.mainTextTypeStatus = false;
                this.mainTextTypeArrayIdx += 1;
                if(this.mainTextTypeArrayIdx >= this.mainTextTypeArray.length)  {
                    this.mainTextTypeArrayIdx = 0;
                }
                setTimeout(this.typeMainText, this.typingSpeed + 1000);
            }
        },

        /* slide */
        _slidePrev(step = -1) {
            const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
            this.currentSlide = index;
            this.slideDirection = 'in';
        },
        _slideNext(step = 1) {
            const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0;
            this.currentSlide = index;
            this.slideDirection = 'out';
        },
        slidePrev(step = -1) {
            this._slidePrev(step);
            this.startSlideTimer();
        },
        slideNext(step = 1) {
            this._slideNext(step);
            this.startSlideTimer();
        },
        slideSwitch(idx) {
            const step = idx - this.currentSlide;
            if(step>0) {
                this.slideNext(step);
            } else {
                this.slidePrev(step);
            }
        },
        startSlideTimer() {
            this.stopSlideTimer();
            this.slideInterval = setInterval(()=> {
                this._slideNext();
            }, this.slideSwitchingSpeed);
        },
        stopSlideTimer() {
            clearInterval(this.slideInterval);
        }
    }
}).mount('#app');