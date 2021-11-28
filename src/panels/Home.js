import React, {useState} from 'react';

import arrow from '../img/arrow.png';
import heart from '../img/heart.png';

import './style.css';

const Home = () => {
    const [activePanel, setActivePanel] = useState('Intro');
    const [activeUser, setActiveUser] = useState('')

    const database = {
        '1981-10-19' : {'name' : 'Trofimova','url' : 'https://sun9-56.userapi.com/impg/4eVf_WULFxWiw5i4xN4uIAwpfL4wcEU84Ym63g/G7liY33ZczQ.jpg?size=1600x1049&quality=96&sign=550fc58ec70c53a7aaccf1d4d1026b93&type=album', 'text' : 'Дорогая мамочка, поздравляю тебя с прекрасным праздником. С днем матери! Спасибо большое, что дала мне жизнь, вложила в меня свою любовь. И спасибо за что, что готова поддержать меня и понять. Ты – самое дорогое, что у меня есть. Ты заслуживаешь только лучшего в жизни! Пусть у тебя на душе всегда будет спокойно, меньше переживай. Я люблю тебя.'},
        '1984-05-26' : {'name' : 'Hapilov','url' : 'https://sun9-14.userapi.com/impg/Pf2u0I7D2HrfWLs1amu8RHy2BFjoEq1q4b5Kww/AikL5LlSCAo.jpg?size=864x1152&quality=96&sign=d6e68690c4f73b8a5de04040ab5b8521&type=album', 'text' : `Желаю каждый новый день ${'\n'}Встречать с улыбкой яркой! ${'\n'}Пускай уйдут навечно в тень ${'\n'}Болезни, грусть, запарки. ${'\n'}Хочу, чтоб счастье тут и там ${'\n'}Тебе лилось наградой, ${'\n'}Тебя люблю я очень, мам,${'\n'}Спасибо, что ты рядом!`},
        '1980-01-02' : {'name' : 'Suhoplueva','url' : 'https://sun9-80.userapi.com/impg/zcXyqU_Mzu0CWeUXKeUy2NvswEoxe5SPStSXmQ/PENbG0LPL7s.jpg?size=1080x1035&quality=96&sign=d2c6c235069dec2ab05b69d6f945bef6&type=album', 'text' : 'Мамочка!!! Поздравляю тебя с днем матери! Ты самое лучшее и дорогое, что могло быть в моей жизни. Спасибо тебя за то, что всегда поддерживаешь меня в моих начинаниях и всегда помогаешь. Я знаю, что всегда могу к тебе обратиться и очень благодарна за это. Я желаю тебе всего самого лучшего, чтобы все твои цели имели положительных успех, и все мечты сбывались. Я тебя очень сильно люблю'},
        '1983-05-05' : {'name' : 'Konoplev','url' : 'https://sun9-37.userapi.com/impg/LC_ggBixCJtHR1PhHWYFayqAu2rRGWrRJoqKFA/taBLKzUbdDk.jpg?size=1200x1600&quality=96&sign=dd80775aa3f4e8b6735a34acf41608aa&type=album', 'text' : 'Дорогая мамочка! Ты — самое дорогое, что есть в моей жизни. От всего сердца поздравляю тебя с Днём матери, и благодарю тебя за твою любовь и заботу. Пусть у тебя будет удача во всем, счастливые и веселые моменты, много веселых улыбок и прекрасное настроение каждый день.Поздравляю тебя, любимая мама.'},
        '1976-01-01' : {'name' : 'Tarasenko','url' : 'https://sun9-39.userapi.com/impg/xcAFudlo-B4MmEv-PDNA9h6eO3xJA0hLQheEIQ/D0-6c4KgeiY.jpg?size=486x578&quality=96&sign=18f25c6b3773ede2640c9ee9d4d1a300&type=album', 'text' : 'Спасибо за заботу и я люблю тебя!'},
        '1973-03-03' : {'name' : 'Kulinich','url' : 'https://sun9-36.userapi.com/impg/utSIMv8KReq44HZkQq6afZxiarzD3eFcjDxhzA/KnbqnnVxLZ0.jpg?size=1278x1920&quality=96&sign=bf7855238e5d5873f6a8f90d3fcdda26&type=album', 'text' : 'Мамочка, спасибо тебе за любовь, заботу и ласку! Прости меня за то, что редко говорю тебе тёплые слова, за разногласия, иногда случающиеся в наших отношениях! Пусть тебя окружают только самые дорогие твоему сердцу люди! Пусть каждый твой день будет наполнен только положительными и радостными моментами! Мамочка, я тебя очень сильно люблю!❤'},
        '1977-06-22' : {'name' : 'Zaynulin','url' : 'https://sun9-77.userapi.com/impg/Ui2IFgoYSkoCw-Hwf3u1E8347Tq5NRA83XkNdg/XHvZHI5IPqM.jpg?size=1114x1600&quality=96&sign=7b7fd3e8a731ee6617a7b403110997e6&type=album', 'text' : 'Любимая мама, поздравляю тебя с этим прекрасным праздником и желаю тебе, чтобы всё в твоей жизни было прекрасно, чтобы все твои мечты исполнялись, и чтобы все тебя уважали и любили'},
        '1983-08-02' : {'name' : 'Shempeleva','url' : 'https://sun9-13.userapi.com/impg/j6Rr0zqxAVdsNhXtPwRxiq6Fd3NX-7029LgOZw/2TF_IkyvSTI.jpg?size=1080x1079&quality=96&sign=78b49eacde272723d6ab078065e58062&type=album', 'text' : 'Дорогая мама! Поздравляю тебя С Днём матери и от всего сердца благодарю за всё, что ты для меня сделала, и делаешь по сей день. Желаю тебе счастья, здоворья и крепких нервов! У нас впереди ещё экзамены))'},
        '1984-08-02' : {'name' : 'Andryshenko','url' : 'https://sun9-67.userapi.com/impg/ibYS2bW4CKxycylwyfhKRwJjeWKvxKAf3vysPA/Ay9lKYgXSJQ.jpg?size=2204x1432&quality=96&sign=8d05fa1b094f610549b2c0f57c801967&type=album', 'text' : 'Хочу чтобы ты оставалась такой же жизнерадостный, красивой и самой лучшей мамой на этом свете🥺'},
        '1982-01-05' : {'name' : 'Vasileva','url' : 'https://sun9-88.userapi.com/impg/_E0d40pjmlRFlmprPm6h1aPQQB4mze9Wr1KSfQ/edcSnIdCyLc.jpg?size=1620x2160&quality=96&sign=094c8ec2bc9d27fcc6a1dda2c78cd20b&type=album', 'text' : 'Мамочка, с днём матери '},
        '1978-10-14' : {'name' : 'Sysueva','url' : 'https://sun9-61.userapi.com/impg/zk84bvg32goJWuDXyjgxeGmTbkx5Ubtr2XCxtQ/v1MPm9zqMfs.jpg?size=1200x1600&quality=96&sign=45ddf2b119012b2abc541afab64f4c0b&type=album', 'text' : 'Любимая моя мама, поздравляю тебя с твоим праздником - Днем матери! Спасибо за все, крепко обнимаю и целую!'},
        '1978-01-11' : {'name' : 'Yuriev','url' : 'https://sun9-56.userapi.com/impg/XCAdZhJF_Zy1oh18DpUYE_tGsDN2UfIyPk_0pg/BBwWC5e_Zjg.jpg?size=960x1280&quality=96&sign=ae206c16d198611caf56f54f6177827d&type=album', 'text' : 'Мама!! Я поздравляю тебя с днем матери, желаю тебе как можно больше терпения со мной!! Хочу чтобы твоя нога прошла супер быстро, скорей бы ты уже слетала к папане, а то грустная блин, и, вообще, чтобы ты всегда была счастлива! Люблю тебя!'},
        '0000-00-00' : {'name' : 'Iliena','url' : 'https://sun9-36.userapi.com/impg/w_C5r6eLSwfn-ySxD1kwrLJHz2BwUJAVYWavfQ/Zt0QQJzTpls.jpg?size=1200x1600&quality=96&sign=f647c42aa279973e930dc39019b555c8&type=album', 'text' : 'Мамуль, с днем Матери! Ты самая лучшая мама в мире, я очень люблю тебя и ценю весь твой труд! Оставайся такой же красивой и счастливой! От кого: Твоя мини-копия'},
        '1981-10-20' : {'name' : 'Cherkunova','url' : 'https://sun9-17.userapi.com/impg/1tIwq_528VNoI75a7yBthohw28m_alS1FAaKSw/eSVQv6P-tKk.jpg?size=576x768&quality=96&sign=3033c41cddbf02cd8049d01d0c232ffd&type=album', 'text' : 'Мамулечка, поздравляю тебя с Днем матери! Желаю тебе всегда оставаться такой же красивой, умной, всегда улыбаться и получать от жизни только счастливые известия. Ты самый мудрый человек, которого я видела в своей жизни. И мне безумно повезло с тем, что именно ты стала моей мамой. Спасибо тебе заботу и поддержку. Я тебя очень люблю!'},
        '1979-08-15' : {'name' : 'Bruhanova','url' : 'https://sun9-20.userapi.com/impg/EX3Zup7JypVpF4Yl-rnZexxQzqPclbB0LqxkQw/1MIavFiD1Ho.jpg?size=1440x1920&quality=96&sign=172b58f17cd5bba2e569a0b819512226&type=album', 'text' : 'Поздравляю с днём матери, дорогая! Желаю тебе всего самого хорошего. Ты самая лучшая женщина на планете, самая лучшая мама!! Будь благословенна❤'},
        '1983-08-12' : {'name' : 'Akishina','url' : 'https://sun9-87.userapi.com/impg/WZhnCcqLwVdAOPCqKNNVx72ljzXAMqY369Tnwg/i5_LLKLuvlI.jpg?size=1341x1600&quality=96&sign=ef64d2fcb875cb0d881bf04ab5649772&type=album', 'text' : 'Любимая мама, поздравляю тебя с праздником! В этот день хочу сказать тебе огромное спасибо за то, что ты родила меня и вот уже 18 лет терпишь моё существование! Люблю тебя, ты лучшая мать в мире'},
        '1984-06-12' : {'name' : 'Ivanov','url' : 'https://sun9-45.userapi.com/impg/C4vkV_yS7WxN6IupmwBVlohL6e9jqfM9UQvpyQ/N8_IRR4gtVk.jpg?size=1200x1600&quality=96&sign=c393b3f3c6837cf16e5cbd2789fdf155&type=album', 'text' : 'Мама, поздравляю тебя с днем матери, все ,что могу я тебе подарить на этот день, это обещание, что я буду здоровым и всегда буду тебе помогать.'},
        '1980-06-16' : {'name' : 'Zohno','url' : '', 'text' : 'Тут должно быть что-то наподобие поздравления. Но думаю лучшее поздравление на день матери - это увидеть как ее сын написал систему, в которой каждый родитель получил личное поздравление от ребенка, и услышать от классухи в очередной раз какой я молодец. С новым годом!!! Я люблю тебя.'},
        '1982-07-06' :  {'name' : 'Eliseeva','url' : 'https://sun9-69.userapi.com/impg/ZwCEufSNDaCZmyPFVgiF4IJMCNkWYONzXu-0rA/rywPaXuPz3c.jpg?size=1280x860&quality=96&sign=a9d63b888743f1706045a2eee8f45b6d&type=album', 'text' : 'Дорогая Мамочка, я поздравляю тебя с Днём матери. Ты самое дорогое, что у меня есть. Спасибо тебе за все что ты делаешь для меня каждый день, спасибо что терпишь мой характер, помогаешь мне во всех моих начинаниях. Поддерживаешь меня и всегда остаёшься на моей стороне. Оставайся всегда такой же красивой, молодой душой, доброй и веселой. Желаю тебе здоровья и любви. Спасибо, что ты есть❤'},
        '1981-11-29' :  {'name' : 'Pidor','url' : 'https://sun9-35.userapi.com/impg/DxOyOQaNMJwLeNpzeTbMd8jT4L_55a_b1dxIGQ/VWEoAVNK8Tw.jpg?size=1680x1120&quality=96&sign=213e349ecfbe54cf8a13717af55f5812&type=album', 'text' : 'Мама, поздравляю с днем матери!!!✨'},
        '1983-09-18' :  {'name' : 'Kisviantseva','url' : 'https://sun9-7.userapi.com/impf/uv09iGakKtIcw8fTtyEuIoM4OAdj_yZd_fwWqw/lGrHi0rwwYE.jpg?size=1440x1920&quality=96&sign=67aed7f7343ddb0093b6b90500799501&type=album', 'text' : 'Забава, гордость и отрада, Печаль, разочарованье, злость - Так сколько же эмоций испытать тебе пришлось, Когда с улыбкой , так упрямо, говорю я надоедливое «мама». Но, брось, я не пытаюсь оскорбить тебя, Напротив, признаюсь, что не было не дня, Когда любви к тебя я не питала, И чувства эти ты же укрепляла. И в этот день, наполненный слезами матерей, Хочу сказать, что не было руки в моих нежней твоей; Что не должны печалить нас невзгоды, тем боле пройденные годы. Мы можем яркие моменты вспоминать, а через год так встретиться опять!'},
        '1974-01-21' :  {'name' : 'Chikilev','url' : 'https://sun9-85.userapi.com/impg/ybkbVJJceTdDQdZFMCHjHEvRvYBm5h0WrUW9qg/bm1a3jKd1is.jpg?size=974x649&quality=96&sign=642a9b118dcf161d1abfb48eeb60274c&type=album', 'text' : 'Привет, мама!!!! Поздравляю с днем матери, желаю счастья, здоровья и вот это вот все!! Также желаю, чтобы слушался сын и наконец помыл полы. Ну в общем вот, мама, я тебя люблю!!! Сегодня кстати 28.11.2021'},
        '1980-12-25' : {'name' : 'Jdanov','url' : 'https://sun9-13.userapi.com/impg/QviYHiAWAZVOwpS0W7lEP2gWGldL9OSGYndFKQ/mtRu9XRQ5Bo.jpg?size=596x1066&quality=96&sign=26fef633774d01b8eeb2cf61ef837571&type=album', 'text' : 'Мама, милая, родная! Тебя сердечно поздравляю. За все спасибо говорю И очень искренне люблю.'},
        '2004-07-09' : {'name' : 'Boldin','url' : 'https://sun9-57.userapi.com/impg/BrVg5RRJf7b8Gf0rKPcJ2nryDcDg2wb4EWmrwg/a97mtQUbGyM.jpg?size=900x1600&quality=96&sign=b2b23c78c0b2245a1c7fc0c3bfbad2ca&type=album', 'text' : 'Актёр. Прославился съемками в гей порно и гачи. Участвует в основном пассивом. В самом рейтинговом фильме "Навозная жижа разбулькалась" принял участие, как пузырек на презервативе Джонни Синса.'},
        '1980-11-11' : {'name' : 'Kudriavtsev', 'url' : 'https://sun9-50.userapi.com/impg/MYloWUz39jK_85fruj_Axyf6O_qz-HSmq2t77Q/leuzRy9Y-ds.jpg?size=376x861&quality=96&sign=3249f029cb51b9b506a045f2338217b1&type=album', 'text' : 'Любимая мамочка, поздравляю тебя с этим замечательным праздником. Желаю тебе счастья, здоровья и чтоб все ОК короче было))))'}
    };

    const go = () => {
        let a = document.getElementById('date').value;
        if (a[4] === '-' && a[7] === '-' && a in database){
            setActiveUser(a);
		    setActivePanel('home');
        }else{
            alert('ОЙ! Кажется путаница. Проверьте введеные данные')
        }
        
	};

    return(
        
        <div className='container' style={{color:'#00000081'}}>
        { activePanel === 'Intro' ?
            <div style={{margin:'90% 0px 0px'}}>
                Введите дату вашего рождения
                <div style={{marginTop:'20px',display:'flex', border:'solid 2px #B8434345', borderRadius:'15px', width:'100%', height:'50px', backgroundColor:'#ffffff'}}>
                    <input id='date' type='date' style={{marginLeft:'15px',border:'0px', height:'47px', backgroundColor:'#ffffff'}}/>
                    <div style={{height:'50px',width:'50px', backgroundColor:'#FAEFEB', border:'solid 2px #B8434345', borderRadius:'15px', marginLeft:'auto', marginTop:'-0.5%'}} onClick={() => {go()}}>
                        <img width={30} src={arrow} alt='' style={{margin:'38% 0px'}} />
                    </div>
                    
                </div>
                <img width={50} src={heart} alt='' style={{position:'relative', bottom:'25px', right:'50%',}} />
            </div>
        : 
            <div style={{padding:'5px'}}>
                
                <div style={{marginTop:'20%', border:'solid 2px #B8434345', borderRadius:'15px', justifyContent:'center', width:'100%', backgroundColor:'#ffffff', padding:'12px 0px 25px'}}>
                    <img width='80%' src={database[`${activeUser}`]?.url} alt='' style={{borderRadius:'20px'}}/>
                    <div>
                        {database[`${activeUser}`]?.text}
                    </div>
                </div>
                <img width={50} src={heart} alt='' style={{position:'relative', bottom:'40px', right:'45%'}} />
            </div>
        }
        </div>
        
    )
};


export default Home;
