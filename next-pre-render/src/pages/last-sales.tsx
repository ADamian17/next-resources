import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import useSWR from 'swr'

const apiUrl = 'https://track-that-job-default-rtdb.firebaseio.com/sales.json'

const LastSalesPage: React.FC<{ sales: any[] }> = (props) => {
  const [sales, setSales] = useState<any[]>(props?.sales);
  const defaultFetcher = (url: string) => fetch(url).then(res => res.json())
  const { error, data } = useSWR(apiUrl, defaultFetcher)

  useEffect(() => {
    if (data) {
      const formatedData = Object.keys(data).map(key => ({ ...data[key], id: key }))
      setSales(formatedData)
    }
  }, [data]);

  if (error) {
    return <p>Fail to load</p>
  }

  if (!data && !sales) {
    return <p>loading...</p>
  }


  return (
    <main>
      <h1>Last Sales Page</h1>

      <ul>
        {
          sales.map(sale => (<li key={sale.id}>{sale.username} - {sale.volume}</li>))
        }
      </ul>
    </main>
  )
}

export default LastSalesPage;

/* combine client fetch side and static props */
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  const sales = Object.keys(data).map(key => ({ ...data[key], id: key }))

  return {
    props: {
      sales
    },
  }
}

