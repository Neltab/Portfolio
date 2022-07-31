const Layout = (props) => {
    return (
    <html>
        <head>
          <link href="/style/tailwind.css" rel="stylesheet" />
        </head>
        <body>{props.children}</body>
    </html>
    )
  }
    
  const Top = (props) => {
    return (
    <Layout>
        <h1 class="text-red-500">Hello Hono!</h1>
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