import React, { useState } from "react";
import {TabMenu} from 'primereact/tabmenu';
import {TabView, TabPanel} from 'primereact/tabview';



import Inicio from "../component/inicio";
import Registro from "../component/registro";

const Menu = () =>{



    return(
        <>
        <div className="card">
            <TabView className="mt-3 flex justify-content-around flex-wrap card-container">
                <TabPanel className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold border-round m-2" header="Home" leftIcon="pi pi-home">
                    <Inicio></Inicio>
                </TabPanel>
                <TabPanel className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold border-round m-2" header="Blog" leftIcon="pi pi-star">

                </TabPanel>
                <TabPanel className="flex align-items-center justify-content-center w-4rem h-4rem bg-indigo-500 font-bold border-round m-2" header="Contacto" leftIcon="pi pi-envelope">
                    <Registro></Registro>
                </TabPanel>

            </TabView>
        </div>

        
        </>
    )
}
export default Menu;
