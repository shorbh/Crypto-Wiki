import React,{Component} from 'react';
class Call extends Component {

  render(){
    if(this.props.description.error){
      //if searched coin is not a coin then api will through an error so corresponding Not Found will render
      return(
        <div>Not Found</div>
      )
    }
    if(this.props.loading){
      //if searched coin is correct and corresponding api call return a valid result  and we render it in requrired format
      return(
        <div className="desc" style={{display: 'block'}}>
        <div className="desc-head">
        <a className ="title" href={this.props.description.links.homepage[0]}>{this.props.description.name} - {this.props.description.symbol}</a>
        </div>

        <div className="desc-body-left">
        <div className="image"><img alt="Loading.." src={this.props.description.image.large}/>
        <hr/>
        Country of origin - {this.props.description.Country_origin}<br/>
        Date of Appearance - <br/>
        {this.props.description.genesis_date}<br/>
        Market Cap Rank -
        {this.props.description.market_cap_rank}<br/>
        Coin Gecko-<br/>
        Rank - {this.props.description.coingecko_rank}<br/>
        Score - {this.props.description.coingecko_score}<br/>
        Developer Score - {this.props.description.developer_score}<br/>
        Community Score - {this.props.description.community_score}<br/>
        Liquidity Score - {this.props.description.liquidity_score}<br/>
        Public Interest Score - {this.props.description.public_interest_score}<br/>
        </div>
        {
          //dangerouslySetInnerHTML is to render the text as html not as text which is actually requried
        }
        <div className="desc-body-right" dangerouslySetInnerHTML={{__html: this.props.description.description.en}}>

        </div>
        </div>
        </div>
      )

    }
    else{
      //in start when no search query is passed then nothing should be render so empty div(simple,but can be another way to do it)
      return(<div></div>)
    }
  }
}
export default Call;
