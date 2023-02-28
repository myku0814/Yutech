Vue.createApp({
    data() {
        return {
            author: 'myku',
            galleryPictures: [
                './img/gal/gal-1.webp',
                './img/gal/gal-2.webp',
                './img/gal/gal-3.webp',
                './img/gal/gal-4.webp',
                './img/gal/gal-5.webp',
                './img/gal/gal-6.webp',
                './img/gal/gal-7.webp',
                './img/gal/gal-8.webp',
                './img/gal/gal-9.webp',
                './img/gal/gal-10.webp',
                './img/gal/gal-11.webp',
                './img/gal/gal-12.webp',
                './img/gal/gal-13.webp',
                './img/gal/gal-14.webp'
            ],
            modals: [
                { name: 'yuguard', src: (document.body.clientWidth <= 600)? './img/DM/yuguard_detail_v_en.webp' : './img/DM/yuguard_detail_en.webp', prodName: 'YuGuard' },
                { name: 'yusound', src: (document.body.clientWidth <= 600)? './img/DM/yusound_detail_v_en.webp' : './img/DM/yusound_detail_en.webp', prodName: 'YuSound' },
                { name: 'yurine', src: (document.body.clientWidth <= 600)? './img/DM/yurine_detail_v_en.webp' : './img/DM/yurine_detail_en.webp', prodName: 'YuRine' },
                { name: 'yucloth', src: (document.body.clientWidth <= 600)? './img/DM/yucloth_detail_v_en.webp' : './img/DM/yucloth_detail_en.webp', prodName: 'YuCloth' },
                { name: 'yubelt', src: (document.body.clientWidth <= 600)? './img/DM/yubelt_detail_v_en.webp' : './img/DM/yubelt_detail_en.webp',  prodName: 'YuBelt' },
                // { name: 'yupet', src: (document.body.clientWidth <= 600)? './img/DM/yupet_detail_v_en.webp' : './img/DM/yupet_detail_en.webp', prodName: 'YuPet' },
                { name: 'trianswer', src: (document.body.clientWidth <= 600)? './img/DM/trianswer_detail_v_en.webp' : './img/DM/trianswer_detail_en.webp', prodName: 'TriAnswer' },
                { name: 'yucbm', src: (document.body.clientWidth <= 600)? './img/DM/yucbm_detail_v_en.webp' : './img/DM/yucbm_detail_en.webp', prodName: 'YuCBM' }
            ],
            cards: [
                [
                    { catagory: 'medical', name: 'yuguard', src: './img/prod_preview/yuguard.webp', prodName: 'YuGuard', msg: 'is a long-term heart rhythm detector, wearable body sensor SoC, and 24 hours single-lead heart monitoring.' },
                    { catagory: 'medical', name: 'yusound', src: './img/prod_preview/yusound.webp', prodName: 'YuSound', msg: 'is a new type of smart stethoscope, which can  measure ECG and heart sound signals simultaneously.' },
                    { catagory: 'medical', name: 'yurine', src: './img/prod_preview/yurine.webp', prodName: 'YuRine', msg: 'is a portable wireless urine detection system and platform that instantly translates your physical health through urine testing.' }
                    
                ],
                [
                    { catagory: 'wearable', name: 'yucloth', src: './img/prod_preview/yucloth.webp', prodName: 'YuCloth', msg: 'is a heart rhythm and respiratory monitoring apparel which provides the most convenient measurement platform for 24/7 health monitoring.' },
                    { catagory: 'wearable', name: 'yubelt', src: './img/prod_preview/yubelt.webp', prodName: 'YuBelt', msg: 'is an ECG monitor chest strap with medical resolution 24 hours accurate monitoring at any angle and in any motion.' },
                    // { catagory: 'wearable', name: 'yupet', src: './img/prod_preview/yupet.webp', prodName: 'YuPet', msg: 'is an ECG and respiration monitoring apparel for pets. Allows owners to form a closer bond with their pets.' }
                ],
                [
                    { catagory: 'education', name: 'trianswer', src: './img/prod_preview/trianswer.webp', prodName: 'TriAnswer', msg: 'is a bio-medical modules for wearable and IOT-based products, for you to build your own creative castle with small sensing blocks.' },
                    { catagory: 'factory', name: 'yucbm', src: './img/prod_preview/yucbm.webp', prodName: 'YuCBM', msg: 'is a customizable inspection equipment and interpretation systems; monitor factory equipment by sensing, collecting, and integrating data.' },
                    // { catagory: 'develop', name: 'develop', src: './img/prod_preview/develop.webp', prodName: 'Develop', msg: '' }
                ]
            ],
            features: [
                { name: 'home care',  src: './img/fea/fea-1.webp', icon: 'icon-home', title: 'Home Care', msg: 'Your Health Technology is committed to the concept of home care, combining the developed products with the smart Internet of Things and the data is transmitted to the cloud platform in a highly secure way, and the artificial intelligence network is used to calculate, predict the possibility of diseases, and inform users of health problems in advance, providing users with the possibility of home care.' },
                { name: 'real-time monitor',  src: './img/fea/fea-2.webp', icon: 'icon-tablet', title: 'Real-time Monitoring', msg: "Your Health Technology products have corresponding APPs for medical tracking, which can instantly retrieve data from the device and plot physiological signals to protect the user's health at any time. It combines the concept of smart networking to achieve real-time test results and provides an intuitive and easy-to-use interface." },
                { name: 'high precision diagnostics',  src: './img/fea/fea-3.webp', icon: 'icon-tools', title: 'Precise Medical', msg: "All of Yutech's biomedical products have passed through medical safety regulations to ensure the accuracy of the physiological signals measured. Therefore, there is no need to worry about whether the product meets medical standards. In addition, it can provide the results of the relevant indicators, which can be provided to physicians for diagnosis." },
                { name: 'high privacy security',  src: './img/fea/fea-4.webp', icon: 'icon-v-card', title: 'Privacy Protection', msg: "The hardware, firmware, software and platforms developed by Your Health Technology are protected with corresponding data security. For example, in the cloud platform, data is uploaded with high-level encryption and sensitive information is broken up to ensure that users' personal information will not be leaked. Therefore, users do not have to worry about data insecurity." }
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
                // yupet: false,
                trianswer: false,
                yucbm: false
            },

            /* typing */
            mainTextTypeArray: ['System-on-Chip', 'Wearable Devices', 'Cloud Platform'],
            mainTextTypeArrayIdx: 0, 
            mainTextIdx: 0,
            mainTextTypeStatus: false,
            mainText: '',
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,


            /* slide */
            slides: [
                
                    { catagory: 'medical', name: 'yuguard', src: './img/prod_preview/yuguard.webp', prodName: 'YuGuard', msg: 'is a long-term heart rhythm detector, wearable body sensor SoC, and 24 hours single-lead heart monitoring.' },
                    { catagory: 'medical', name: 'yusound', src: './img/prod_preview/yusound.webp', prodName: 'YuSound', msg: 'is a new type of smart stethoscope, which can  measure ECG and heart sound signals simultaneously.' },
                    { catagory: 'medical', name: 'yurine', src: './img/prod_preview/yurine.webp', prodName: 'YuRine', msg: 'is a portable wireless urine detection system and platform that instantly translates your physical health through urine testing.' },
                    { catagory: 'wearable', name: 'yucloth', src: './img/prod_preview/yucloth.webp', prodName: 'YuCloth', msg: 'is a heart rhythm and respiratory monitoring apparel which provides the most convenient measurement platform for 24/7 health monitoring.' },
                    { catagory: 'wearable', name: 'yubelt', src: './img/prod_preview/yubelt.webp', prodName: 'YuBelt', msg: 'is an ECG monitor chest strap with medical resolution 24 hours accurate monitoring at any angle and in any motion.' },
                    // { catagory: 'wearable', name: 'yupet', src: './img/prod_preview/yupet.webp', prodName: 'YuPet', msg: 'is an ECG and respiration monitoring apparel for pets. Allows owners to form a closer bond with their pets.' },
                    { catagory: 'education', name: 'trianswer', src: './img/prod_preview/trianswer.webp', prodName: 'TriAnswer', msg: 'is a bio-medical modules for wearable and IOT-based products, for you to build your own creative castle with small sensing blocks.' },
                    { catagory: 'factory', name: 'yucbm', src: './img/prod_preview/yucbm.webp', prodName: 'YuCBM', msg: 'is a customizable inspection equipment and interpretation systems; monitor factory equipment by sensing, collecting, and integrating data.' }
            ],
            slideDirection: 'in',
            currentSlide: 0,
            slideInterval: null,
            slideSwitchingSpeed: 5000,
            slideTouchStartX: 0,
            slideTouchEndX: 0,

            /* contact us form and radios */
            radios: [
                { catagory: 'medical', name: 'yuguard', prodName: 'YuGuard' },
                { catagory: 'medical', name: 'yusound', prodName: 'YuSound' },
                { catagory: 'medical', name: 'yurine', prodName: 'YuRine' },
                { catagory: 'wearable', name: 'yucloth', prodName: 'YuCloth' },
                { catagory: 'wearable', name: 'yubelt', prodName: 'YuBelt' },
                // { catagory: 'wearable', name: 'yupet', prodName: 'YuPet' },
                { catagory: 'education', name: 'trianswer', prodName: 'TriAnswer' },
                { catagory: 'factory', name: 'yucbm', prodName: 'YuCBM' }
            ],
            contacts: [
                { label: 'contact1', title: 'Product Consultation' },
                { label: 'contact2', title: 'Product Purchase' },
                { label: 'contact3', title: 'Contact Us & Business Cooperation' }
            ]
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
        toggleCollapsible(evt) {
            let target = evt.target; // collapsible btn
            const content = target.nextElementSibling; // collapsible content
            const isActive = content.style.maxHeight;

            // close all the collapsibles
            Array.from(document.getElementsByClassName('collapsible__btn')).forEach((ele) => {
                ele.nextElementSibling.style.maxHeight = null;
                if(ele.classList.contains('collapsible__active')) {
                    ele.classList.remove('collapsible__active');
                }
            });
            this.cleanAllTheInputs();

            
            if(!isActive) {
                target.classList.toggle('collapsible__active');
                content.style.maxHeight = content.scrollHeight + 'px';

                // get target real position
                Array.from(document.getElementsByClassName('collapsible__btn')).forEach((ele) => {
                    if(target.id === ele.id) {
                        target = ele;
                    }
                });
                // vertical scroll to specific element
                const self = this;
                setTimeout(() => {
                    window.scrollTo({
                        top: self.findClickElementPosition(document.getElementById(target.id)),
                        left: 0,
                        behavior: 'smooth'
                    });                        
                }, 500);
            }
        },
        findClickElementPosition(ele) {
            let curtop = 0;
            if (ele.offsetParent) {
                do {
                    curtop += ele.offsetTop;
                } while (ele == ele.offsetParent);
                return [
                    // (ele.offsetParent.offsetWidth <= 600) ?
                    // curtop :
                    // curtop - ele.offsetParent.offsetHeight * 0.05
                    curtop
                ];
            }
        },
        cleanAllTheInputs() {
            document.querySelectorAll('input[type]:not([type="radio"])').forEach(input => {
                input.value = '';
            });
            document.querySelectorAll('textarea').forEach(input => {
                input.value = '';
            });
            document.querySelectorAll('input:checked').forEach(input => {
                input.checked = false;
            });
        },
        sendContactUsEmail(el) {
            const prodName = document.querySelector('input[name="prodSelect"]:checked');
            const piece = document.getElementById(`${el.label}_piece`);
            const name = document.getElementById(`${el.label}_name`);
            const email = document.getElementById(`${el.label}_email`);
            const phone = document.getElementById(`${el.label}_phone`);
            const message = document.getElementById(`${el.label}_message`);
            const data2send = {
                prodName: (prodName !== null)? prodName.value : '', 
                piece: (piece !== null)? piece.value : '', 
                name: (name !== null)? name.value : '', 
                email: (email !== null)? email.value : '', 
                phone: (phone !== null)? phone.value : '', 
                message: (message !== null)? message.value : ''
            };
            
            if(el.title === '產品諮詢') {
                delete data2send.piece;
            } else if(el.title === '產品購買') {

            } else if(el.title === '聯絡我們&合作商案') {
                delete data2send.piece;
                delete data2send.prodName;
            } else {
                console.log('Contact us by email failed(default)');
            }

            Object.keys(data2send).forEach(key => {
                console.log(`data2send[${key}] is: ${data2send[key]}`);
            });

            if(data2send.email !== '' && data2send.name !== '' && data2send.phone !== '') {
                // after copy the data to tmp, we can clean the data
                this.cleanAllTheInputs();

                // sanitize and post request
                this.post(
                    '/mail.php',
                    data2send
                );
            } else {
                alert("信箱/名字/電話 => 不可為空!!");
            }
        },
        async post(url, data) {
            try {
                const rawResponse = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data)
                });
                console.log('email AJAX');
                const content = await rawResponse.json();
                console.log(content);
                if(rawResponse.status === 200) {
                    alert("寄送成功!!!!");
                }
            } catch(err) {
                console.log(err);
            }
        }
    }
}).mount('#app');