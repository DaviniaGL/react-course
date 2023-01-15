import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Angel
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pheralb">
                Pablo Gordo
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing name="Elon Musk">
              Elon Musk  
            </TwitterFollowCard>        
        </section>
    )
}