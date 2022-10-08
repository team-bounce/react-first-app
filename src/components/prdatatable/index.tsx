import * as React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './productservice';
import './index.css';

type oProps = {};
type oState = {
  products: object[];
};

export class PRDataTable extends React.Component<oProps, oState> {
  // Material UI v5.10.8 Buttons

  constructor(props: oProps) {
    super(props);
    this.state = { products: [] };
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {
    const productService = new ProductService();
    productService
      .getProductsSmall()
      .then((data: object[]) => this.setState({ products: data }));
  }

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    // const button: HTMLButtonElement = event.currentTarget;
    // console.info('App.click', button.name);
  }

  callbackHandler(data: object): void {
    // console.info('callback', JSON.stringify(data));
  }

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <p>This is the PrimeReact DataTable Component</p>
        <a
          href="https://www.primefaces.org/primereact/datatable/basic/"
          target="new"
        >
          More Info...
        </a>
        <br />
        <div className="card">
          <DataTable value={products} responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
      </React.Fragment>
    );
  }
}
