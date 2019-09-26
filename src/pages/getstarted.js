import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GetStartedWrapper = styled.div`
  padding-top: 80px;
`
const GetStartedContent = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #f84aa7;
    font-size: 50px;
    @media (max-width: 500px) {
      font-size: 40px;
    }
  }
  ul {
    /* font-weight: bold; */
    font-size: 20px;
    margin: 0 20%;
    li {
      margin-bottom: 20px;
    }
  }
  span {
    font-weight: bold;
  }
`

const GetStarted = () => (
  <GetStartedWrapper>
    <Layout>
      <SEO title="Getting Started" />
      <GetStartedContent>
        <h1>Getting Started</h1>
        <ul>
          <li>
            <span>
              BEFORE YOU USE MTGA PATHWAY, BE SURE TO ENABLE DETAILED LOGGING IN
              MAGIC ARENA.
            </span>{" "}
            You can accomplish this in Settings -> View Account -> Enable
            Detailed Logs
          </li>
          <li>
            You will be taken to Github so you can download the{" "}
            <span>LATEST</span> and <span>TRUSTED</span> version of the application. NOTE:
            The source code is also available for inspection.
          </li>
          <li>
            Launch the .exe installer. Be sure to trust the file as long as you
            download from my <a href="https://github.com/Digald/mtga-pathway">Github</a> repository only.
          </li>
          <li>
            Depending on your local Windows enviornment, antivirus, or filewall,
            you may be prevented from installing the application. Give MTGA
            Pathway any permissions it may need to run.
          </li>
          <li>
            Once the application starts, your collection should automatically be
            recorded and ready to use!
          </li>
          <li>
            MTGA Pathway assumes that you have Magic Arena installed in your C:
            Drive (for Windows users). If you have the game installed elsewhere,
            you may be prompted to find the game's log file on your computer
            manually.
          </li>
        </ul>
        <h1>Troubleshooting</h1>
        <ul>
          <li>
            If you notice the application is not updating new cards or is being inconsistent with your collection in Magic Arena, you can delete the <span>Settings.txt</span> file from your <span>\AppData\Roaming\MTGA Pathway\</span> folder.
          </li>
          <li>
            Double check that your antivirus or firewall is not preventing you from running the application. Add an exception if needed.
          </li>
          <li>
            When in doubt: uninstall MTGA Pathway, restart your computer, redownload the application, and follow the Getting Started instructions again.
          </li>
          <li>
            Contact me if problems persist.
          </li>
        </ul>
      </GetStartedContent>
    </Layout>
  </GetStartedWrapper>
)

export default GetStarted
