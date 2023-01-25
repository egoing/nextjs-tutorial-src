import { CounterRedux } from '../components/CounterRedux'
import { CounterRTKQuery } from '@/components/CounterRTKQuery';

export default function Home(props) {
  return (
    <>
      <div>
        <CounterRedux></CounterRedux>
      </div>
      <div>
        <CounterRTKQuery></CounterRTKQuery>
      </div>
    </>
  )
}
