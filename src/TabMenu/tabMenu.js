import React from "react";
import {TabView, TabPanel} from 'primereact/tabview';



import Inicio from "../component/inicio";
import Contacto from "../component/contacto";
import EndPoint from "../component/endPoint";
const Menu = () =>{



    return(
        <>
        <div >
            <TabView className="mt-3 flex justify-content-around flex-wrap ">
                <TabPanel className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold border-round m-2" header="Home" leftIcon="pi pi-home">
                    <Inicio></Inicio>
                </TabPanel>
                <TabPanel className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold border-round m-2" header="Blog" leftIcon="pi pi-star">
                    <EndPoint></EndPoint>
                </TabPanel>
                <TabPanel className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold border-round m-2" header="Contacto" leftIcon="pi pi-envelope">
                    <Contacto/>
                </TabPanel>

            </TabView>
        </div>

        
        </>
    )
}
export default Menu;
