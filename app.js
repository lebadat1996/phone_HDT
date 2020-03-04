const  Max_Battery =100;
let Mobile =  function (phoneName,color) {
    this.name=phoneName;
    this.Color=color;
    this.battery=100;
    this.inbox=[];
    this.outbox=[];
    this.message= "";
    this.WriteMessage=function (message) {
        this.message=message;
    };
    this.SendMessage=function (phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
        this.battery--;
    };
    this.getInbox=function () {
        return this.inbox;
    };
    this.getOutbox=function () {
        return this.outbox;
    };
    this.deleteInbox=function () {
        this.inbox=[];
    }
};
let OPPo = new Mobile("oPPO","mau` trang");
let NoKia= new Mobile("noKia","Den TRang");
OPPo.WriteMessage("Hi.Chao`cau! to la oppo");
OPPo.SendMessage(NoKia);
document.getElementById("text").innerHTML=NoKia.getInbox();
document.write("mau dien thoai oppo la: "+ OPPo.Color+"<br>");
document.write("mau dien thoai nokia la: "+ NoKia.Color);
document.write("<br>"+ "Thu da gui: "+ OPPo.getOutbox());


