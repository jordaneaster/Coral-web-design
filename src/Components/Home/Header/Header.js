import React from 'react'
import './Header.css'
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  //   const data = useStaticQuery(graphql`
  //   query HeaderHome {
  //       allContentfulIntroHeaderComponent {
  //           nodes {
  //             title
  //             image {
  //               fluid {
  //                 src
  //               }
  //             }
  //             cta {
  //               title
  //               url
  //             }
  //             subTitle {
  //               childMarkdownRemark {
  //                 html
  //               }
  //             }
  //           }
  //         }
  //     }
  // `);
  const data = useStaticQuery(graphql`
    query HeaderHome {
        allContentfulIndex(filter: {slug: {eq: "/"}}) {
    edges {
      node {
        id
        content {
          ... on ContentfulIntroHeaderComponent {
            title
            subTitle {
              childMarkdownRemark {
                html
              }
            }
            image {
              fluid {
                src
              }
            }
            cta {
              title
              url
            }
          }
        }
      }
    }
  }
      }
  `);
  const getHomeData = data.allContentfulIndex.edges[0].node.content
  const filter = getHomeData.filter(el => el.title != undefined ? true : false)
  return (
    <div className="Header_Container">
      {filter.map((el, i) => (
        <div key={i} className="Header_box">
          <div className="div_head">
            <h4 className="Header_Title">{el.title}</h4>
            <p className="Header_desc" dangerouslySetInnerHTML={{ __html: el.subTitle.childMarkdownRemark.html }}></p>
            <a href={el.cta.url} target="_blank" >
              <div className="Btn_Cotainer">
                <button className="get_started">{el.cta.title}</button>
              </div>
            </a>
          </div>
          <div className="header_div">
            <img className="header_image" src={el.image.fluid.src} alt="Header Image" />
          </div>
        </div>
      ))}
    </div>
  )
}
export default Header