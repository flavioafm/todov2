import { getCsrfToken } from "next-auth/react"

function login({ csrfToken }) {

    return (
      <div className="
        w-screen
        h-screen
        bg-[url(https://images8.alphacoders.com/470/thumb-1920-470318.jpg)]
        bg-cover
        bg-center
        flex
        items-center"
      >
        <div className="container mx-auto">
          <div className="max-w-xl p-5 mx-auto backdrop-blur-lg rounded-md shadow-2xl animate-fade-in-down">
            <div className="text-center mb-10">
              <h1 className="my-3 text-3xl font-semibold text-white">Todo V2 (WIP)</h1>
              <p className="text-gray-400">Check it out <a className="underline" href="https://edirect-todo-client.herokuapp.com/home">Todo V1</a>.</p>
            </div>
            <div>
              <form action="/api/auth/callback/credentials" method="POST">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="username"
                    placeholder="you@email.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-10">
                  <label className="text-sm text-gray-400">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="91 1234-567"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-2 py-4 text-white bg-cyan rounded-md  focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default login

export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }



  {/*<div className="container mx-auto">
        <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <form method="post" action="/api/auth/callback/credentials">
            <div className="mb-6">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="flex flex-col gap-y-2 w-full">
                <label>Email</label>
                <input
                  type="text"
                  name="username"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              {/* <div className="flex flex-col gap-y-2">
                <label>
                  Username
                  <input name="username" type="text" />
                </label>
              </div> * /}
              <div className="mb-6">
              <label>
                Password
                <input name="password" type="password" />
              </label>
              </div>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
    </div>*/}