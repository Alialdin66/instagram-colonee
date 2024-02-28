import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const generateSuggestions = () => {
      const Suggestions = [...Array(20)].map((_, i) => ({
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        id: i,
      }));
      setSuggestions(Suggestions);
    };

    generateSuggestions();
  }, []);

  return (
    <div className="hola" maxW={"container.sm"}>
      {Suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
