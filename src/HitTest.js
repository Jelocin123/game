class HitTest {

    constructor(){

    }//END Constructor

    checkme(a,b){

        let ab = a.getBounds();
        let bb = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;

    }

}

export default HitTest;