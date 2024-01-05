---
title: Concepts
description: ''
position: 20
category: GitHub
---

## Terminology

### GitHub
GitHub is a code hosting platform for version control and collaboration.

Some Standards organizations use it also to create technical documents, white papers, code, etc.

### Markdown
In these guidelines, we used GitHub Flavored Markdown as a text format to build documents.

This text has a special formatting syntax that is understood by GitHub. Markdown text rendered inside of the platform is presented as rich text.

<alert>
Outside of GitHub, markdown content may or may not render correctly.
</alert>

### Repository (repo)
A directory or storage space where the projects are safely kept. Sometimes, we call it a `repo`, as an abbreviated word. Each repository contains one or more branches.

### Branches
The content in a repo is organized in `branches` (like a folder in an FTP).

Only roles with write access, such as Chairs, Editors or Maintainers can create branches. Regularly, branches are merged into each other.

The GitHub platform creates branches by copying the content from one branch into a new one. Then, content on the branches can evolve independently from each other and branches can be merged at the end, identifying deltas. If conflicts arise, then it is possible to resolve them with the editor.

### Commit
It is a way to identify changes to one or more files in a branch. Each commit is identified by a UNIQUE ID or hash.

### Pull Request
It is a way to group commits on GitHub. 
It allows people to review your changes = commits in a single place.

In GitHub, each pull request contains all the changes and comments provided by people during the discussion.

### Issues
It is a way to track ideas, enhancements, tasks, bugs, action items, collect feedback, etc.
It is possible to use labels to qualify the type of issue.

## Repository Home Page

<img width="699" alt="image" src="https://user-images.githubusercontent.com/3258579/182497904-8c11da1a-9f8d-4a94-b6c2-3451cd50ca7b.png">

### Watch
It is used to register to receive or stop notifications via email. When a Pull Request on an issue is created, the system sends a notification to those members that have registered to `watch` the repository. The platform provides different options to be notified. 

### Star
It indicates that you like the content of the repo and want to follow up on changes to its content.

### Fork
It is the action to copy the content from the repository into your personal GitHub or Organization account (for Organization Administrators).

### Code
This is the area where the content in the repository (code, text) is stored.

### Issues
It is used to provide feedback, comments, etc. It is possible to refer to other Issues or Pull Requests by inserting a `#Number`.

### Pull Request
By clicking this link you will open a window containing all the open and closed Pull Requests created on the repository. These Pull Requests (PR) group one or more changes. Also, contain the history of comments provided by the participants.

### Projects
It is a Kanban type of billboard. It is used to move Issues and Pull Requests from column to column. 

### Branches in the repo
A branch contains a set of text files at a particular time, (like a screenshot). A branch has a unique name. Each repository can have one or multiple branches. Branches can be merged into each other. 

### Add file
This function allows creating in a particular branch a new file using the web browser. 

<alert>
Please note that uploading files are only available for those members that have WRITE access to the repository.
</alert>

### Code
This button opens a window that allows you to download the content on the related branch or copy the URL to clone the repository.

### Security
In GitHub people are organized in Teams, and Teams are allocated to repositories (repos).

When a Team is allocated to a repo, the administrator indicates what access rights are given to the people in the Team, e.g.., WRITE, READ, TRIAGE, ADMIN, MAINTAINER. Each Team receives a name. You can create as many Teams as you need. People can be added to one or multiple teams.

These are some typical roles assigned to a repository and its access rights:

#### Members
* TRIAGE: 
  * Can read and clone a repository. 
  * Can also manage issues and pull requests

#### Chairs, Editors, Maintainers
* WRITE:
  * Can read and clone and push to a repository (direct changes without creating a pull request)
  * Can also manage issues and pull requests

### Fork
This operation copies the content of a repository (with all its branches)  from e.g., a particular Organization account into your personal GitHub account or into another Organization account (if you are the maintainer).
A FORK operation is performed by clicking the `Fork` button.

<img width="418" alt="image" src="https://user-images.githubusercontent.com/3258579/182501211-3ec3a208-ebda-439d-91e5-90032ec0d64a.png">

### Clone
It is an action executed via the Git command line, where a repository is copied to your working directory, (in your laptop), e.g., of a clone git command:

```git
  $ git clone https://github.com/OpenManufacturingPlatform/omp-training-repository-private.git
```
