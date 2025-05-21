
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-off-white dark:bg-deep-blue/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-deep-blue dark:text-white">News & Road Safety Tips</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Stay informed with the latest traffic news and safety recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-light-blue/20"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-light-blue/20 text-light-blue">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="mt-2">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const newsArticles = [
  {
    title: "New Traffic Laws Introduced in Cameroon",
    excerpt: "The Cameroon government has introduced new road safety regulations to reduce accidents.",
    category: "News",
    date: "May 15, 2023"
  },
  {
    title: "5 Essential Safety Tips for Night Driving",
    excerpt: "Learn how to stay safe when driving at night on Cameroon's roads.",
    category: "Safety Tips",
    date: "May 10, 2023"
  },
  {
    title: "Road Safety Campaign Launches in Yaoundé",
    excerpt: "A new initiative aims to educate drivers and pedestrians about road safety.",
    category: "News",
    date: "May 5, 2023"
  },
  {
    title: "Vehicle Maintenance Tips for the Rainy Season",
    excerpt: "Keep your vehicle in top condition during Cameroon's rainy season with these tips.",
    category: "Maintenance",
    date: "April 28, 2023"
  },
  {
    title: "Understanding Road Signs in Cameroon",
    excerpt: "A comprehensive guide to road signs and symbols used across the country.",
    category: "Education",
    date: "April 20, 2023"
  },
  {
    title: "Emergency Kits: What Every Driver Should Have",
    excerpt: "Prepare for emergencies by keeping these essential items in your vehicle at all times.",
    category: "Safety Tips",
    date: "April 15, 2023"
  }
];

export default News;
