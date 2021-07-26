import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchChars} from './redux'
import CharacterGrid from './characterGrid'
import Header from './Header'
const BbContainer = ({BbData,fetchChars}) => {
    useEffect(()=>{
        fetchChars()
    },[])
    return BbData.loading?(<h2>Loading...</h2>):BbData.error?(<h2>{BbData.error}</h2>):
    (<div>
    
        <Header/>
        
        <div>
            <CharacterGrid isLoading={BbData.loading} items={BbData} />
            {/* {
                BbData && BbData.chars && BbData.chars.map(char=>(<p>{char.name} {char.occupation[0]} {char.status}</p>))
            } */}
        </div>
    </div>);
}

const mapStateToProps=(state)=>{
    return{
        BbData:state.chars
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchChars:()=>dispatch(fetchChars())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BbContainer)