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
                { name: 'yuguard', src: './img/yuguard_detail.PNG' },
                { name: 'yusound', src: './img/yusound_detail.PNG' },
                { name: 'yurine', src: './img/yurine_detail.PNG' },
                { name: 'yucloth', src: './img/yucloth_detail.PNG' },
                { name: 'yubelt', src: './img/yubelt_detail.PNG' },
                { name: 'yupet', src: './img/yupet_detail.PNG' },
                { name: 'trianswer', src: './img/trianswer_detail.PNG' }
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
            ]
        };
    }
}).mount('#app');