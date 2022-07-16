import React, { useState } from "react";
import {TabMenu} from 'primereact/tabmenu';
import {TabView, TabPanel} from 'primereact/tabview';

import Inicio from "../inicio";
import Registro from "../registro";

const Menu = () =>{



    return(
        <>
        <div className="card">
            <TabView className="mt-3">
                <TabPanel header="Home" leftIcon="pi pi-home">
                    <Inicio></Inicio>
                </TabPanel>
                <TabPanel header="Blog" leftIcon="pi pi-star">

                </TabPanel>
                <TabPanel header="Contacto" leftIcon="pi pi-envelope">
                    <Registro></Registro>
                </TabPanel>

            </TabView>
        </div>

        
        </>
    )
}
export default Menu;
