import React,{Component} from 'react';
class Call extends Component {

  render(){
  if(this.props.description.error){
    return(
      <div>Not Found</div>
    )
  }
  if(this.props.loading){
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

    <div className="desc-body-right" dangerouslySetInnerHTML={{__html: this.props.description.description.en}}>

    </div>
    </div>
    </div>
  )

}
else{
  return(<div></div>)
}
}
}
export default Call;
