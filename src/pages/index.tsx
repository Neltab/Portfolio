const Layout = (props) => {
    return (
    <html>
        <body>{props.children}</body>
    </html>
    )
  }
    
  const Top = (props) => {
    return (
    <Layout>
        <h1>Hello Hono!</h1>
        <ul>
        {props.messages.map((message) => {
            return <li>{message}!!</li>
        })}
        </ul>
    </Layout>
    )
  }

const messages = ['Good Morning', 'Good Evening', 'Good Night']
export default <Top messages={messages}/>