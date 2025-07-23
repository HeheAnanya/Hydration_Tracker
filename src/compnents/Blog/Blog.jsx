import React from 'react'
import './Blog.css'
import BlogCard from './BlogCard'
const Blog = () => {

    const data=[
        {
        id:"1",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2024/09/Why-should-you-be-drinking-more-water-this-winter_-scaled.jpg?resize=400%2C250&ssl=1",
        head:"The Ultimate Guide to Staying Hydrated in Monsoons",
        date:"Jun 9, 2025",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://timesofindia.indiatimes.com/life-style/food-news/5-smart-tips-to-stay-hydrated-during-monsoon/articleshow/111380462.cms"
        },
        {
        id:"2",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2023/08/Never-Forget-to-Drink-Water-Again_-Best-water-reminder-app-for-iOS-1.jpg?resize=400%2C250&ssl=1",
        head:"Never Forget to Drink Water Again: Best water reminder app for iOS",
        date:"Jun 2, 2025",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://ltmenergy.co.za/10-of-the-best-water-apps-to-use-for-free/"
        },
        {
        id:"3",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2025/02/How-to-Encourage-Children-to-Drink-More-Water_-1.jpg?resize=400%2C250&ssl=1",
        head:"Top 10 Hydrating Foods You Should Incorporate into Your Diet",
        date:"May 23, 2025",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://amritsr.com/foods-that-keep-you-hydrated/"
        },
        {
        id:"4",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2025/02/How-to-Encourage-Children-to-Drink-More-Water_.jpg?resize=400%2C250&ssl=1",
        head:"How to create a personalized water plan?",
        date:"Feb 21, 2025",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://blog.waterminder.com/tips/how-to-create-a-personalized-water-plan/"
        },
        {
        id:"5",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2024/10/Hydration-Myths-Debunked_-Separating-Fact-from-Fiction.png?resize=400%2C250&ssl=1",
        head:"Hydration Myths Debunked: Separating Fact from Fiction",
        date:"Oct 30, 2024",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://www.nationalgeographic.com/health/article/hydration-myths-debunked"
        },
        {
        id:"6",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2024/07/Amazing-Tricks-to-Keep-Your-Little-Ones-Hydrated-All-Day-1.png?resize=400%2C250&ssl=1",
        head:"How Much Water Should You Drink in a Day?",
        date:"Aug 2, 2024",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://www.health.harvard.edu/staying-healthy/how-much-water-should-you-drink"
        },
        {
        id:"7",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2024/07/banner.jpg?resize=400%2C250&ssl=1",
        head:"Amazing Tricks to Keep Your Little Ones Hydrated All Day",
        date:"Jul 25, 2024",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://www.connecticutchildrens.org/growing-healthy/stay-hydrated-creative-ways"
        },
        {
        id:"8",
        src:"https://i0.wp.com/blog.waterminder.com/wp-content/uploads/2024/03/new-Hydration-Hacks-for-Busy-Professionals.jpg?resize=400%2C250&ssl=1",
        head:"Hydration Hacks for Busy Professionals",
        date:"May 13, 2024",
        mess:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, ad quia explicabo unde doloremque est repudiandae veritatis rerum? Corporis error ipsa nesciunt quas nam ullam, modi ipsam pariatur sit ipsum fugit placeat rerum eaque laudantium. Labore quam, quidem dolorem exercitationem, facere esse explicabo laboriosam consequatur dicta sapiente ad! Quaerat necessitatibus ipsa saepe eaque molestiae porro similique veritatis facere ea dolore. Qui debitis, delectus iure quasi placeat laudantium! Accusamus nobis, nam saepe eos earum, aperiam consequuntur adipisci voluptatibus esse reiciendis placeat voluptate ipsa amet animi ut natus recusandae quidem velit enim, pariatur libero. Laudantium ipsam iste dicta minus optio natus.",
        link:"https://endurance8health.com/2025/03/13/hydration-hacks-simple-ways-to-drink-more-water-daily/"
        }
    ]


  return (
    <div className='blog'>
        {data.map((e)=>{
            return(
                <>
                <BlogCard src={e.src} mess={e.mess} head={e.head} date={e.date} link={e.link} key={e.id}/>
                </>
            )
        })}
        {/* <BlogCard/> */}
    </div>
  )
}

export default Blog