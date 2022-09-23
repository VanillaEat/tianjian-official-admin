import WindowOne from './modules/window.one'
/*
import WindowTwo from '@/menu/modules/window.two'
*/
import WindowThree from '@/menu/modules/window.three'
import WindowFour from '@/menu/modules/window.four'
const menu = [
    {
        /*        title: '演示',
        icon: 'sidebar-default',*/
        children: [
            WindowOne,
//            WindowTwo,
            WindowThree,
            WindowFour
        ]
    }



]

export default menu
