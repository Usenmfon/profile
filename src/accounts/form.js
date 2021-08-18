import React from 'react'
import NigerianBanksData from './nigerianbanks'

export class Input extends React.Component{
    initialState = {
        accountCurrency: '',
        recipientCountry: '',
        recipientBank: '',
        bankNumber: '',
        firstInput: false,
        secondInput: false,
        banksData: NigerianBanksData
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target 

        this.setState({
            [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    handleDisplay(name) {
        switch(name){
            case 'firstInput':
            this.setState({ firstInput: !this.state.firstInput})
            break;
            case 'secondInput':
            this.setState({ secondInput: !this.state.secondInput})
            break;
            default: 
            return null
        }
    }

    render(){
        const { accountCurrency, recipientCountry, bankNumber, firstInput, recipientBank, secondInput} = this.state
        const banksData = this.state.banksData.map((data) => {
            return(
                <option value={data.name}>{data.name}</option>
            )
        })
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="accountCurrency">Account Currency</label>
                    <select 
                        className="form-control" 
                        type="text"
                        name="accountCurrency" 
                        id="accountCurrency"
                        value={accountCurrency}
                        onChange={(value) =>
                            {
                                this.handleChange(value)
                                this.handleDisplay('firstInput')
                            }
                        }
                    >
                        <option selected>--Select account currency--</option>
                        <option value="NGN">NGN</option>
                        <option value="GBP">GBP</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <label htmlFor="recipientCountry">Recipient Account Country</label>
                    <select 
                        className="form-control" 
                        type="text"
                        name="recipientCountry" 
                        id="recipientCountry"
                        value={recipientCountry}
                        onChange={(value) =>
                            {
                                this.handleChange(value)
                                this.handleDisplay('secondInput')
                            }
                        }
                    >
                        <option selected>--Select account currency--</option>
                        <option value="Nigeria">Nigeria</option>
                    </select>
                </div>
                
                {firstInput && secondInput &&(
                    <div className="form-group">
                                <label htmlFor="bankNumber">Bank Account Number</label>
                                <input 
                                    className="form-control" 
                                    type="number"
                                    name="bankNumber"
                                    id="bankNumber" 
                                    value={bankNumber}
                                    onChange={(value) =>
                                        {
                                            this.handleChange(value)
                                        }
                                    }
                                />
                            
                            <label htmlFor="recipientBank">Recipient Account Bank</label>
                            <select 
                                className="form-control" 
                                type="text"
                                name="recipientBank" 
                                id="recipientBank"
                                value={recipientBank}
                                onChange={(value) =>
                                    {
                                        this.handleChange(value)
                                    }
                                }
                            >
                                {banksData}
                            </select>
                            <input className="btn btn-primary mt-3" type="button" value="Add Bank Account" onClick={this.submitForm}/>
                    </div>
                )}
            </form>
        )
    }
   
}
