import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { ProductService } from '../Service/ProductService';
import { Rating } from 'primereact/rating';
import './inicio.css';

import Footer from './footer';

const Inicio = () => {
    const [products, setProducts] = useState(null);
    const [dialog, setDialog] = useState(false);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Precio alto a bajo', value: '!price' },
        { label: 'Precio de barato a caro', value: 'price' },
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const dialogFuncMap = {
        'dialog': setDialog,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);


    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img src={`data/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-pencil" label="Descripcion" onClick={() => onClick('dialog')}></Button>
                        <Dialog style={{ width: '50vw' }} header={data.description} visible={dialog} footer={renderFooter('dialog')} onHide={() => onHide('dialog')}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.</p>
                            <br />


                        </Dialog>

                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }





    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        //else if (layout === 'grid')
        //  return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Ordenar por Precio" onChange={onSortChange} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <>
            <div className="dataview-demo">
                <div className="card">
                    <DataView value={products} layout={layout} header={header}
                        itemTemplate={renderListItem} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
                </div>
            </div>

        
        </>

    );
}
export default Inicio;