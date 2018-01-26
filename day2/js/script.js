class Tab{

    constructor () {
        this.init();
    }
    init(){
        this.newwrap();
        this.addEvent();
    }
    addEvent(){
        let ull=document.querySelector('.ull');
        let ulis=ull.querySelectorAll('li');
        let olis=document.querySelectorAll('.oll li');
        [...ulis].map((item,index)=>{
           item.addEventListener('click',(index)=>{
              this.clickOl(index)
           })
        })

    }
    clickOl(index){
        
    }

    newTit(){
        let val=['标题1','标题2','标题3'];
        let ul=document.createElement('ul');
        
        ul.className='ull';
        val.map((item,index,arrs)=>{
            let li=document.createElement('li');
            li.innerHTML=item;
            ul.append(li)
        })
        return ul;
    }
    newContent(){
        let con=['内容1','内容2','内容3'];
        let ol=document.createElement('ol');
        ol.className='oll';
        con.map((item,index,arrs)=>{
            let li=document.createElement('li');
            li.innerHTML=item;
            ol.append(li)
        })
        return ol;
    }
    newwrap(){

        let wrap=document.createElement('div');
        wrap.className='wrap';

        let tit=this.newTit(); 
        let content=this.newContent();
        document.body.append(wrap);
        wrap.append(tit);
        wrap.append(content);
    }

   
}

let tab=new Tab();