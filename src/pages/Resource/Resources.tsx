import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0 2rem 0;
  background: var(--neutral);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 10;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  z-index: 11;
  display: block;
  visibility: visible !important;
  opacity: 1 !important;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 10;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 3;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  background: ${props => props.active ? 'var(--primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--accent)'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 3;

  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'var(--secondary)'};
    color: white;
    transform: translateY(-2px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Card = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div<{ image: string }>`
  height: 200px;
  background: ${props => `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--neutral);
    opacity: 0;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    z-index: 2;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 0.75rem;
  font-weight: 600;
  position: relative;
  z-index: 2;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
  position: relative;
  z-index: 2;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: var(--neutral);
  color: var(--accent);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white !important;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-align: center;
  font-weight: 500;
  position: relative;
  z-index: 2;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    color: white !important;
  }
`;

// Placeholder image function
const getPlaceholderImage = (category: string) => {
  return `https://source.unsplash.com/400x200/?${category.toLowerCase().replace(/\s+/g, '-')}`;
};

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'programs', name: 'Programs' },
    { id: 'education', name: 'Education' },
    { id: 'research', name: 'Research' },
    { id: 'events', name: 'Events' }
  ];

  const resources = [
    {
      id: 1,
      title: "Innovation Hub",
      description: "State-of-the-art facilities equipped with the latest technology for innovation and development at Ethiopian IT Park.",
      image: getPlaceholderImage("technology-hub"),
      link: "#",
      tags: ["Innovation", "Technology", "Facilities"],
      category: "facilities"
    },
    {
      id: 2,
      title: "Startup Incubation Center",
      description: "Complete startup support system with mentorship, funding opportunities, and networking resources.",
      image: getPlaceholderImage("startup-business"),
      link: "#",
      tags: ["Startups", "Funding", "Mentorship"],
      category: "programs"
    },
    {
      id: 3,
      title: "Tech Academy",
      description: "Professional training programs and workshops focused on emerging technologies and digital skills.",
      image: getPlaceholderImage("education-technology"),
      link: "#",
      tags: ["Education", "Skills", "Development"],
      category: "education"
    },
    {
      id: 4,
      title: "Research Labs",
      description: "Advanced research facilities for technological innovation and development projects.",
      image: getPlaceholderImage("research-lab"),
      link: "#",
      tags: ["Research", "Innovation", "Technology"],
      category: "research"
    },
    {
      id: 5,
      title: "Tech Events Space",
      description: "Modern venues for hosting technology conferences, meetups, and networking events.",
      image: getPlaceholderImage("tech-conference"),
      link: "#",
      tags: ["Events", "Networking", "Community"],
      category: "events"
    },
    {
      id: 6,
      title: "Digital Resource Center",
      description: "Comprehensive digital library with access to global tech resources and research materials.",
      image: getPlaceholderImage("digital-library"),
      link: "#",
      tags: ["Digital", "Resources", "Learning"],
      category: "education"
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <PageContainer>
      <MainContent>
        <Header>
          <Title>Resources & Facilities</Title>
          <Subtitle>
            Discover world-class resources and facilities at Ethiopian IT Park, 
            designed to support your innovation and technological growth.
          </Subtitle>
        </Header>

        <FilterSection>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterSection>

        <Grid>
          {filteredResources.map(resource => (
            <Card key={resource.id}>
              <CardImage image={resource.image} />
              <CardContent>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
                <TagContainer>
                  {resource.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <Button href={resource.link}>Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </MainContent>
    </PageContainer>
  );
};

export default Resources;