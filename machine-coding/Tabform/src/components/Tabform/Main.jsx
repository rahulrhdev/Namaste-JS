import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "Rahul",
    age: 25,
    email: "rahulrhdev@gmail.com",
    interests: ["coding", "gym", "cooking"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!formData.name || formData.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!formData.age || formData.age.length < 18) {
          err.age = "Age is not valid";
        }
        if (!formData.email || formData.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err)
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (formData.interests.length < 1) {
          err.interests = "Select at least one interest.";
        }
        setErrors(err)
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  console.log(formData);
  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="tabForm">
      <div className="heading-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className="heading"
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTabComponent
          data={formData}
          setData={setFormData}
          errors={errors}
        />
      </div>
      <div>
        {activeTab > 0 && (
          <button
            onClick={() => {
              if (tabs[activeTab].validate()) {
                setActiveTab((prevState) => prevState - 1);
              }
            }}
          >
            Prev
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
        {activeTab !== tabs.length - 1 && (
          <button
            onClick={() => {
              if (tabs[activeTab].validate()) {
                setActiveTab((prevState) => prevState + 1);
              }
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
