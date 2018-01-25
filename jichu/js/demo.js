class Dialog{
    constructor(){
        this.tit='今天星期三';
        this.main='猜猜这些内容能不能隐藏';
        this.init()
    }
    init(){
        this.newWrap();
    }
    newTit(){
        let header=document.createElement('div');
        let span=document.createElement('span');
        header.className="demo_tit";
        span.className='btn_right';
        header.innerHTML=this.tit;
        span.innerHTML="×";
        header.append(span);
        return header;
    }
    newContent(){
        let con=document.createElement('div');
        con.className='content';
        con.innerHTML=this.main;

        return con;
    }
    hide(){
        let close=document.querySelector('.btn_right');
        let bigbox=document.querySelector('.wrap');
        close.onclick = function(){
            document.body.remove(bigbox);
        }
    }

    newWrap(){
        let wrap=document.createElement('div');
        wrap.className='wrap'
        let tits=this.newTit();
        let content=this.newContent();
        wrap.append(tits);
        wrap.append(content);
        document.body.append(wrap);

        this.hide()
    }
    
}
let dialog = new Dialog();