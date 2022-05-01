Vue.createApp({
    data() {
        return {
            author: 'myku',
            galleryPictures: [
                './img/gal-1.jpg',
                './img/gal-2.jpg',
                './img/gal-3.jpg',
                './img/gal-4.jpg',
                './img/gal-5.jpg',
                './img/gal-6.jpg',
                './img/gal-7.jpg',
                './img/gal-8.jpg',
                './img/gal-9.jpg',
                './img/gal-10.jpg',
                './img/gal-11.jpg',
                './img/gal-12.jpg',
                './img/gal-13.jpg',
                './img/gal-14.jpg'
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
                    { catagory: 'medical', name: 'yuguard', src: './img/yuguard.png', prodName: '貼心片', msg: '是一款長時間心律偵測器全天候的心臟單導程監測，貼心守護。' },
                    { catagory: 'medical', name: 'yusound', src: './img/yusound.png', prodName: '貼心音', msg: '是一款新型智慧聽診器，心電及心音訊號即時同步顯示，心雜音無所遁形。' },
                    { catagory: 'medical', name: 'yurine', src: './img/yurine.png', prodName: '尿檢譯', msg: '是一款可攜式無線尿液檢測平台，透過尿液檢測即時翻譯您的生理健康。' }
                    
                ],
                [
                    { catagory: 'wearable', name: 'yucloth', src: './img/yucloth.png', prodName: '貼心衣', msg: '是一款心律及呼吸監控服飾，提供最方便的量測平台，全天候監控健康。' },
                    { catagory: 'wearable', name: 'yubelt', src: './img/yubelt.png', prodName: '貼心帶', msg: '是一款具醫療解析度之心律監控胸帶，任何動作任何角度，全天候精準監控。' },
                    { catagory: 'wearable', name: 'yupet', src: './img/yupet.png', prodName: '寵心衣', msg: '是一款適用於寵物的心律及溫度監控服飾，讓主人能更貼近與愛寵之間的距離。' }
                ],
                [
                    { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' },
                    { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' },
                    { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' }
                ]
            ],
            features: [
                { name: 'home care',  src: './img/fea-1.jpg', icon: 'icon-home', title: '居家照護', msg: '裕晶醫學科技秉持著居家照護的概念，將所開發產品與智慧物聯網結合，資料藉由高度安全方式傳送至雲端平台，進行人工智慧網路之計算，用以預測疾病發生可能性，並提早知會使用者的健康問題，提供使用者居家照護的可能。' },
                { name: 'real-time monitor',  src: './img/fea-2.jpg', icon: 'icon-tablet', title: '即時監測', msg: '裕晶醫學科技產品均有對應APP可以進行醫療追蹤使用，APP能即時將資料從裝置上擷取下來並繪製生理訊號，隨時守護使用者健康。其結合智慧聯網概念，以達到即時檢測結果，並提供直觀易使用操作介面。' },
                { name: 'high precision diagnostics',  src: './img/fea-3.jpg', icon: 'icon-tools', title: '精準醫療', msg: '裕晶醫學科技之生醫產品均通過醫療安全法規，保證所量測生理訊號的精確性。因此不需要擔心產品是否符合醫療等級，且能提供相關指標檢測結果，使用者獲取後能提供給自己熟悉醫師進行診斷。' },
                { name: 'high privacy security',  src: './img/fea-4.jpg', icon: 'icon-v-card', title: '隱私保障', msg: '裕晶醫學科技所開發之硬體、韌體、軟體與平台均有進行對應的資安防護。以雲端平台為例，資料上傳時會進行高等級加密並打散敏感資訊，以確保使用者個資不會外洩。因此使用者不必擔心資料不安全的問題。' }
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
                { catagory: 'medical', name: 'yuguard', src: './img/yuguard.png', prodName: '貼心片', msg: '是一款長時間心律偵測器全天候的心臟單導程監測，貼心守護。' },
                { catagory: 'medical', name: 'yusound', src: './img/yusound.png', prodName: '貼心音', msg: '是一款新型智慧聽診器，心電及心音訊號即時同步顯示，心雜音無所遁形。' },
                { catagory: 'medical', name: 'yurine', src: './img/yurine.png', prodName: '尿檢譯', msg: '是一款可攜式無線尿液檢測平台，透過尿液檢測即時翻譯您的生理健康。' },
                { catagory: 'wearable', name: 'yucloth', src: './img/yucloth.png', prodName: '貼心衣', msg: '是一款心律及呼吸監控服飾，提供最方便的量測平台，全天候監控健康。' },
                { catagory: 'wearable', name: 'yubelt', src: './img/yubelt.png', prodName: '貼心帶', msg: '是一款具醫療解析度之心律監控胸帶，任何動作任何角度，全天候精準監控。' },
                { catagory: 'wearable', name: 'yupet', src: './img/yupet.png', prodName: '寵心衣', msg: '是一款適用於寵物的心律及溫度監控服飾，讓主人能更貼近與愛寵之間的距離。' },
                { catagory: 'education', name: 'trianswer', src: './img/trianswer.png', prodName: '試穿戴', msg: '是一款穿戴式生醫訊號開發平台，藉由小巧的感測積木，構築您創意的城堡。' }  
            ],
            slideDirection: 'in',
            currentSlide: 0,
            slideInterval: null,
            slideSwitchingSpeed: 5000,
            slideTouchStartX: 0,
            slideTouchEndX: 0
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
        copyText(msg) {
            const el = document.createElement('textarea');
        
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.value = `${msg}`;
        
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            const toast = document.createElement('div');
            toast.innerHTML = 'copied!!!'
            toast.style.position = 'absolute';
            toast.style.bottom = '1%';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.zIndex = '10';
            toast.style.width = '10vw';
            toast.style.width = '10vh';
            toast.style.backgroundColor = '#00009955';
            toast.style.color = 'white';
            toast.style.textAlign = 'center';
            toast.style.borderRadius = '1rem';
            toast.style.padding = '1rem';
            toast.style.transition = 'all .5s';
            document.getElementsByTagName('footer')[0].appendChild(toast);
            setTimeout(()=> {
                toast.style.opacity = 0;
            }, 200);
            setTimeout(()=> {
                document.getElementsByTagName('footer')[0].removeChild(toast);
            }, 6000);
        },
        toggleFlag: function(flagKey, evt) {
            this.showModals[flagKey] = !this.showModals[flagKey];
        },
        toggleFlagWithCloseSidebar: function(flagKey, evt) {
            document.querySelector('#navi-toggle + label').click();
            this.toggleFlag(flagKey, evt);
        },
        getCardSpanClass(catagory) {
            let str = '';
            if(catagory === 'medical') {
                str = 'card__details__span_medical';
            } else if(catagory === 'wearable') {
                str = 'card__details__span_wearable';
            } else if(catagory === 'education') {
                str = 'card__details__span_education';
            }
            return str;
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
        },
        slideTouchStart(evt) {
            this.slideTouchStartX = evt.changedTouches[0].screenX;
        },
        slideTouchEnd(evt) {
            this.slideTouchEndX = evt.changedTouches[0].screenX;
            if(this.slideTouchStartX - this.slideTouchEndX > 50) {
                // swiped left
                this.slideNext();
            } else if(this.slideTouchEndX - this.slideTouchStartX > 50) {
                // swiped right
                this.slidePrev();
            }
        },
    }
}).mount('#app');