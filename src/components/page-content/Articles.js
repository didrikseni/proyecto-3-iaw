import React from 'react'

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          title: 'PRUEBA DESDE LA API',
          description: 'ESTA ES UNA PRUEBA DE CREAR POST DESDE API',
          content: '<p>Este es el contenido de mi articulo...</p>',
          tags: [],
          file: '',
          author: 'jon doe',
        },
        {
          title: 'Articulo de prueba',
          description: 'Descripccion de prueba',
          content: 'asd',
          tags: ['Cursadas', 'Educación', 'Programación', 'Ciencias de la computación', 'Investigación'],
          file: '',
          author: 'Test',
        },
        {
          title: 'Laravel',
          description: 'Pequeño post para testeo',
          content: 'asd',
          tags: [],
          file: '',
          author: 'Test',
        },
        {
          title: 'Articulo de prueba con archivo',
          description: 'Articulo de prueba con archivo',
          content: '<p>Aca va el contenido</p>',
          tags: ['Off-topic'],
          file: 1,
          author: 'Test',
        },
        {
          title: 'Ipsam placeat in nemo et sit.',
          description: 'Qui alias cupiditate sunt voluptatem amet consequuntur.',
          content:
            'Quisquam ex sequi dolorem tenetur. Sed animi officiis iste. Nisi atque perspiciatis et et aut voluptas corporis. Ea voluptatem sed natus perspiciatis et a. Dolorem nobis ad cum mollitia dolorum qui. Aperiam enim pariatur quas ut et voluptas odit.',
          tags: [],
          file: '',
          author: 'Dr. Adolfo Huels I',
        },
        {
          title: 'Vel quis quis porro tempora.',
          description: 'Consequatur quibusdam culpa molestiae.',
          content:
            'Quia deserunt cumque expedita deleniti dolores. Voluptates repudiandae maxime ut non. Consectetur hic vel qui saepe. Magni quia nemo nostrum numquam provident rerum dolores. Officiis voluptate temporibus distinctio praesentium odit.',
          tags: [],
          file: '',
          author: 'Juanita Bayer',
        },
        {
          title: 'Nostrum ut veritatis consequatur est assumenda fuga possimus dolorem.',
          description: 'Dolores eos maxime adipisci consequuntur veniam qui iusto.',
          content:
            'Saepe beatae vel voluptates architecto necessitatibus pariatur. Pariatur cupiditate voluptatum nesciunt voluptatum. Aut qui numquam enim dicta facilis porro deleniti. Excepturi cupiditate molestias consequatur nostrum. Non similique quo exercitationem aperiam corrupti consequatur. Vel aut et rerum veniam asperiores. In repellendus laudantium atque tenetur.',
          tags: [],
          file: '',
          author: 'Denis Gutkowski',
        },
        {
          title: 'Labore unde debitis similique non voluptas et cupiditate porro.',
          description: 'Exercitationem animi est qui nobis dolorem.',
          content:
            'Hic maiores nulla facilis. Nobis similique exercitationem quisquam quis vel neque. Quia est eos qui quo. Molestias ratione aut enim eaque delectus est perspiciatis. Minima porro itaque vel dolorem.',
          tags: [],
          file: '',
          author: 'Dr. Adolfo Huels I',
        },
        {
          title: 'Ducimus cupiditate explicabo laboriosam ea maxime est inventore distinctio.',
          description: 'Aut nobis accusamus ea voluptates dolor iure.',
          content:
            'Rerum in ea sequi quos laborum tempora corporis. Dolorum dolore modi quos deserunt eius. Id quia velit ut itaque dolor. Fugit illum unde sed facilis voluptate itaque asperiores.',
          tags: [],
          file: '',
          author: 'Henriette Parisian',
        },
        {
          title: 'Qui ad minus quia nobis enim.',
          description: 'Nihil eos vel sint ut.',
          content:
            'Veritatis eius aut aliquam minima aliquam aut. Ipsam perferendis et saepe harum nemo. Eius tenetur voluptate itaque sint amet. Qui quo et rem et voluptatem. Tenetur sed incidunt suscipit doloremque dolorem accusamus ad animi.',
          tags: [],
          file: '',
          author: 'Prof. Louisa Feest Jr.',
        },
        {
          title: 'Quisquam delectus incidunt consequuntur quisquam qui inventore.',
          description: 'Error rerum ut esse odit officiis.',
          content:
            'Aut perspiciatis voluptates consequatur et dolores. Mollitia et sunt soluta laudantium officia iste. Ea ut placeat eaque tempora dolorem ut corporis. Numquam nulla fugit omnis commodi eaque natus culpa. Sapiente assumenda est at in laudantium fugiat recusandae. Officiis sit quisquam dolores id facilis. Sed ipsam est deleniti est eius eos ab.',
          tags: [],
          file: '',
          author: 'Casandra Marvin',
        },
        {
          title: 'Distinctio quis nam voluptas dolores.',
          description: 'Voluptatem laborum officia quia sit omnis nihil.',
          content:
            'Et provident necessitatibus blanditiis veritatis consequatur dicta itaque. Est perferendis voluptates pariatur provident delectus. Saepe quia nulla voluptatibus error consequatur omnis. Facere magni quia numquam laudantium fugit quis. Vitae et enim laboriosam at nostrum vitae voluptate. Quia nam sit blanditiis.',
          tags: [],
          file: '',
          author: 'Hollis Sawayn',
        },
        {
          title: 'Placeat omnis quis ea sed soluta dignissimos.',
          description: 'Fugit architecto voluptas nisi nihil soluta rerum.',
          content:
            'Officia fugit neque enim placeat voluptas rerum. Ipsam sit aliquid qui. Sunt minus eum molestiae consequuntur delectus neque. Quod molestiae rerum ipsum voluptatem molestiae deleniti dicta. Ut ea aspernatur error dolorem molestiae ratione magni. Ullam quos non quis aperiam. Omnis fugiat facere ratione a.',
          tags: [],
          file: '',
          author: 'Casandra Marvin',
        },
        {
          title: 'Maiores aut provident ipsam iure voluptatem molestias pariatur.',
          description: 'Id tempore distinctio a debitis rem atque itaque odio.',
          content:
            'Et ut ut illum repudiandae aut voluptas velit. Ex id omnis qui corporis totam. Delectus sed quos laudantium itaque eligendi. Expedita qui ut magnam. Possimus qui voluptatem nostrum consequatur laudantium. Repudiandae occaecati facere et nihil consequuntur ut velit.',
          tags: [],
          file: '',
          author: 'Gisselle Shields',
        },
        {
          title: 'Aut odit eaque quam corrupti.',
          description: 'Necessitatibus et debitis non totam impedit nemo.',
          content:
            'Id illo repellat magnam eos vitae. Animi vero accusantium ipsa aut magni illo sapiente. Et voluptatem impedit et voluptatum cupiditate ratione est. Omnis at quaerat velit iure. Repudiandae labore ducimus animi nesciunt inventore.',
          tags: [],
          file: '',
          author: 'Jennyfer Crist',
        },
        {
          title: 'Officia velit illo commodi.',
          description: 'Nam odio quis ipsa reiciendis corrupti maxime.',
          content:
            'Ipsa temporibus deserunt et et voluptatibus ea nihil. Similique laudantium beatae aperiam harum omnis et similique. Est explicabo architecto nesciunt ad voluptatibus. Enim est consequatur magnam adipisci. Consequatur corporis hic repudiandae alias neque sed maiores deserunt.',
          tags: [],
          file: '',
          author: 'Jennyfer Crist',
        },
        {
          title: 'Unde veniam officia magni qui harum sed.',
          description: 'Et accusantium sunt esse quis quo.',
          content:
            'Rerum quo adipisci libero voluptatem saepe. Est quia veritatis et aperiam nobis beatae fugiat. Quia magnam error sequi debitis. Sint est tempora quo ipsum cumque. Fugiat laboriosam tempora quia reiciendis temporibus qui. Aut voluptatibus tenetur cupiditate alias.',
          tags: [],
          file: '',
          author: 'Liam Zemlak',
        },
        {
          title: 'Ut id totam laboriosam velit quibusdam impedit ipsum.',
          description: 'Nihil quae laborum excepturi sit velit.',
          content:
            'Repellendus voluptate dolorem consequatur consequuntur voluptatem ullam possimus. Minima aut alias consequatur amet sed. Earum expedita voluptas ut. Consequatur quidem accusamus amet qui expedita ipsam iusto dolor. Et rem unde et distinctio. Non est quis sed est illo.',
          tags: [],
          file: '',
          author: 'Dr. Adolfo Huels I',
        },
        {
          title: 'Iusto et facere possimus molestiae esse omnis laborum.',
          description: 'Fugit soluta recusandae placeat ab quia.',
          content:
            'Reprehenderit nam culpa non deleniti rerum alias sint. Sint a maiores quia ut occaecati velit. Sint aut quia est ea ullam. Consequatur dolorum dolorum est perspiciatis excepturi pariatur quas recusandae. Eaque odio sit omnis quasi rem odio placeat non. Ad et tempore molestiae nihil.',
          tags: [],
          file: '',
          author: 'Jennyfer Crist',
        },
        {
          title: 'Repellat eos at non expedita rerum voluptatem eos.',
          description: 'Aut adipisci modi ipsum velit sequi rem ipsa.',
          content:
            'Aperiam et qui in est vitae quia. Molestiae deleniti et molestiae aut. Dolorem ipsa aperiam veritatis. Totam fugit tempora repellendus consequatur quidem. Adipisci ab eum tempora sint modi.',
          tags: [],
          file: '',
          author: "Rita O'Connell",
        },
        {
          title: 'Unde reiciendis quae ut eligendi et aspernatur.',
          description: 'Blanditiis voluptatem alias tempora.',
          content:
            'Ut sunt aperiam nobis. Eveniet dicta praesentium cumque. Assumenda cupiditate corrupti rerum placeat ut maiores aperiam est. Atque ipsam qui fugiat qui qui quis. Quia dicta et accusamus a alias doloribus voluptatum non.',
          tags: [],
          file: '',
          author: 'Juanita Bayer',
        },
        {
          title: 'Eveniet eveniet voluptatem cumque sed et.',
          description: 'Et similique et porro omnis in accusamus repudiandae.',
          content:
            'Voluptas corporis tempore laudantium modi perferendis. Et provident rerum est dolorem. Aliquam exercitationem aperiam occaecati dolores ut voluptatibus officia consequatur. Laudantium aliquam neque nisi esse aperiam. Quod dolorem quae est dolores cum molestiae. Hic non nostrum voluptatem aliquam facere perspiciatis. Perspiciatis quia sed tempore doloribus eius molestiae.',
          tags: [],
          file: '',
          author: 'Juanita Bayer',
        },
        {
          title: 'Quis minus asperiores ab ut voluptas animi.',
          description: 'Nihil voluptatum rerum non assumenda nemo debitis aut.',
          content:
            'Nobis eos iste magni a vel corrupti sequi. Dolorem illum at facilis omnis dignissimos non voluptatum. Vel qui ratione aliquam libero dicta quia autem incidunt. Commodi non rerum delectus quibusdam. Debitis itaque et quis.',
          tags: [],
          file: '',
          author: 'Denis Gutkowski',
        },
        {
          title: 'Repellendus voluptatibus maxime minima quia.',
          description: 'Voluptatem natus a tempore ut.',
          content:
            'Praesentium maiores placeat omnis vitae. Est atque quam similique voluptates distinctio. Voluptas qui id maxime sapiente officia nostrum. Tempora culpa dolorum sit asperiores alias labore voluptate.',
          tags: [],
          file: '',
          author: 'Jennyfer Crist',
        },
        {
          title: 'Sit et itaque dolore nobis neque quisquam.',
          description: 'Ut voluptatum quod odio nam fugiat amet excepturi.',
          content:
            'Distinctio est laboriosam et quo. Saepe esse officia eos sit incidunt tempora. Eveniet et dolor voluptas. Rerum tempore illum sint labore. Error est sint iste suscipit quos quo. Ipsam ut exercitationem consequatur.',
          tags: [],
          file: '',
          author: 'Dr. Adolfo Huels I',
        },
        {
          title: 'Et ut aperiam nemo ut neque.',
          description: 'Laudantium non pariatur incidunt qui dignissimos repellendus sit.',
          content:
            'Nemo consequuntur eos unde in ut sed. Hic qui dolore totam et quo. Amet quisquam voluptatum eius dolorem corporis eligendi nostrum. Consequatur doloremque quisquam magni numquam quis nihil distinctio numquam.',
          tags: [],
          file: '',
          author: 'Clement Bechtelar',
        },
        {
          title: 'Unde vel totam assumenda cum distinctio.',
          description: 'Quidem aut quos quae dolores.',
          content:
            'Ut modi aliquid voluptatem sit minus. Distinctio voluptatibus ad expedita autem. Culpa optio officia voluptatem commodi voluptas sit eos. Inventore voluptatem temporibus placeat cumque enim et molestiae.',
          tags: [],
          file: '',
          author: 'Dr. Adolfo Huels I',
        },
        {
          title: 'Sapiente voluptas temporibus temporibus rerum ab delectus.',
          description: 'Consequatur rerum est quibusdam ut est veritatis doloremque natus.',
          content:
            'Ullam deleniti sint aperiam voluptate aliquam incidunt ut. Nostrum officia quo dignissimos est vero molestias. Optio aliquid voluptatum et facere. Reiciendis quia dolores voluptas debitis. Molestiae quas est ducimus expedita.',
          tags: [],
          file: '',
          author: 'Casandra Marvin',
        },
        {
          title: 'Expedita quis sed eum aliquam.',
          description: 'Est quidem culpa neque voluptates cum reiciendis eos commodi.',
          content:
            'Omnis atque adipisci rem. Aliquid explicabo itaque fuga beatae nemo. At quaerat minus nihil ut. Qui molestias ipsum aut rerum ducimus et qui ex. Et non quaerat et dolore. Accusamus recusandae est dolores distinctio non enim.',
          tags: [],
          file: '',
          author: 'Henriette Parisian',
        },
        {
          title: 'Omnis et totam accusantium aliquid aut voluptatem reprehenderit maxime.',
          description: 'Veniam iure dolore eos alias.',
          content:
            'Consectetur voluptatem ducimus quia dolorem culpa ut. Enim nisi voluptatem vero quod repellat eos. Repudiandae id ut ab. Accusamus commodi id voluptate itaque ex ipsa. Et consectetur rem dolores ut. Aut provident et et voluptatum quisquam eius sed. Perferendis dolorem aut eveniet veritatis nam sit est.',
          tags: [],
          file: '',
          author: 'Christy Homenick',
        },
        {
          title: 'Illum aut dolorem in dolor.',
          description: 'Quo ipsum non et impedit non eveniet magnam.',
          content:
            'Dolores officia consequuntur voluptatem minus blanditiis et. Laudantium adipisci dolores dolores eos. Sed quisquam qui esse accusantium recusandae dolores amet sunt. Enim eum a et quia. Necessitatibus error a quam. Ipsam porro quibusdam inventore qui fugit voluptate et. Unde enim est culpa.',
          tags: [],
          file: '',
          author: 'Emilio Huel',
        },
        {
          title: 'Tempora cumque harum quas repellendus illum magni ipsam.',
          description: 'Quidem architecto omnis reprehenderit qui voluptatem.',
          content:
            'Aut ea corrupti magnam quia neque. Recusandae fugiat corporis voluptas ut. Optio itaque quibusdam at numquam placeat. Veniam commodi modi perspiciatis error omnis iure ut. Qui culpa accusantium vero mollitia et voluptas voluptates quaerat.',
          tags: [],
          file: '',
          author: 'Christy Homenick',
        },
        {
          title: 'Pariatur blanditiis ex fugit.',
          description: 'Corporis esse praesentium incidunt aspernatur et.',
          content:
            'Officiis ipsum quo sunt labore eligendi voluptatibus similique numquam. Fuga commodi et cum nesciunt vel qui. Eveniet inventore nihil mollitia distinctio corrupti distinctio. Nulla voluptatibus blanditiis aut mollitia qui natus. Id architecto officiis quaerat perferendis saepe reprehenderit omnis. Voluptatibus ut et ad eligendi.',
          tags: [],
          file: '',
          author: 'Liam Zemlak',
        },
        {
          title: 'Dolores velit corporis vero maxime.',
          description: 'Est omnis odio ipsum fugiat.',
          content:
            'Voluptas qui ut unde praesentium. Autem doloribus distinctio et minima. Nihil similique amet perspiciatis voluptates est quas. Eum quia provident in quo. Voluptatem nulla quis sint consequatur.',
          tags: [],
          file: '',
          author: 'Christy Homenick',
        },
        {
          title: 'Velit excepturi aliquam iure eum.',
          description: 'Nihil fuga voluptatem voluptatibus tempora sit qui corporis.',
          content:
            'Eos non eum quia quaerat assumenda. Consectetur necessitatibus quo qui cumque laborum libero sunt. Cupiditate aperiam ut magni soluta omnis illo totam. Aut laudantium placeat eos quia quasi. Officiis labore quod suscipit voluptatum. Tempore quo mollitia inventore et aut et amet. Et ea assumenda nihil reprehenderit ut enim.',
          tags: [],
          file: '',
          author: 'Clovis Kozey PhD',
        },
        {
          title: 'Aut tenetur esse numquam ut voluptatibus minus non minus.',
          description: 'Nesciunt quaerat voluptatem qui exercitationem aut id iure.',
          content:
            'Perferendis porro dicta laborum nam impedit et illum deleniti. Culpa sit atque reiciendis voluptatibus. Totam eos quaerat fugit at est quisquam. Doloribus a nisi quas voluptatem.',
          tags: [],
          file: '',
          author: 'Gisselle Shields',
        },
      ],
      isLoading: false,
    }
  }
  /*
  componentDidMount() {
    this.getArticlesFromApiAsync()
      .then((response) => response.json())
      .then((articlesJson) => this.setState({ articles: articlesJson, isLoading: false }))
  }
*/
  render() {
    if (this.state.isLoading) return 'Cargando artículos...'
    else
      return (
        <div class="card">
          <div className="card-header mb-2">
            <h4>Artículos</h4>
          </div>
          <ul className="list-unstyled">
            {this.state.articles.map((article) => (
              <li key={article.id} className="pt-2 mx-4">
                <div className="row">
                  <div className="col-8">
                    <h4>{article.title}</h4>
                  </div>
                  <div className="col-3 ml-auto">
                    <p className="custom-text">Score: 0</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <p className="custom-text">{article.description}</p>
                  </div>
                  <div className="col-4 ml-auto">
                    <p className="custom-text">Autor: {article.author}</p>
                  </div>
                </div>
                <hr></hr>
              </li>
            ))}
          </ul>
        </div>
      )
  }

  getArticlesFromApiAsync = async () => {
    try {
      return await fetch('https://portal-uns.herokuapp.com/api/api_articles', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODE1MTE4YmVlZGQ4MmI2ZDAxZjViZmJjNDM2ZWI4MzhkNmE1M2ZiYjdiMzgyZWViMTBlNWQxMTE2MGY0MGYyZWFmOTU1M2ZkOTVjYTc1YzkiLCJpYXQiOjE1OTQ0ODQ4NzgsIm5iZiI6MTU5NDQ4NDg3OCwiZXhwIjoxNjI2MDIwODc4LCJzdWIiOiIzMSIsInNjb3BlcyI6W119.ktXuGRgCsS90WaqbB47Ysm7plPqbpCpbUiF4iUG6wLD0Pm8g9KjFFuP88GA4oMaUoy6wuTxwK4pSaYs5x7vSKp44YxCd-fwmNlr7IgEwYlWuvoP2v-AlkXnU6nYha8NKtOKEmdu9KwV78Nwq1Wt9FVi03pWFXCGN34kMUCYoJm0DnyPdHgbsmqNeI0g-WUhb2-xOGzu9fuWjcIrDLo0n-cfRzV_zoG6yjrrHLdqGTZqGBiIqjf4MuoFoenPEiu5dZ0EDTekC2KnmTq17UgSJXVa5EShiv6aE5_9LQN2IIHQPki--SAKuBMAgckrpvvbgW_yvVrs9ForBVT2QjPqhwlWsOMcflydJKrTrzH0QuG87_1LVOyu8lalrukaoLJ8WzHHejHSizY7dSXWWNjw0zlFqVLjkE4_KCAmNKy3flfIKPH7gvsryROuDwsZsei4GCP8Ga_TLfKU-9R0RXU8d6QWPJQH0jFrVFGH_ZTpL05tog8z0NmgedS3Tp3lk0gXcK5zXW4EpjildYb8DP5vvDAUyu4JEMwqaIwHkvlyM-5a3vRjKqcnjJhPT8zowLdoa6A-x_Apr5wA3_zTorFJBjvM0DNF00Mf5yMuWoV-R3us2Wgt_qYCJBhfIV4bAr7FMP455bb9Pb4q3rTxBspq5AkC7OsBKZKMk94enkgrcSx4',
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default Articles
