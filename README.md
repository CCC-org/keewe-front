# Git strategy - (Github Flow)

**1. 브랜치 생성**

- 브랜치 생성시 다음과 같은 방식으로 브랜치 목적에 맞는 브랜치 헤더를 설정한다.

| 생성 목적 | 브랜치 위치                      |
| --------- | -------------------------------- |
| 기능 개발 | [origin/Feature/{issue_number}]  |
| 버그 픽스 | [origin/Fix/{issue_number}]      |
| 코드 개선 | [origin/Refactor/{issue_number}] |

```
issue_number: 해당 이슈가 진행되는 스프린트에서 할당받은 고유 이슈 번호
```

- 체계적인 분류를 위해 브랜치 이름을 통해 의도를 명확하게 드러낸다.

- 새로운 브랜치는 항상 최신의 main브랜치에서 만든다.

- main브랜치는 항상 최신의 상태로 유지한다.

**2. 개발 & 커밋 & 푸쉬**

- 커밋 메세지를 명확하게 작성한다.

- 원격 브랜치로 수시로 push하여 상황을 공유한다

**3. PR(Pull Request) 생성**

- 피그백이나 도움이 필요할 때 그리고 merge 준비가 완료되었을 때 Pull Request를 생성한다.

- 동료들의 리뷰가 끝난 후 준비가 완료되었다면 main브랜치로 반영을 요구한다

- main 브랜치로 merge될 경우 conflict를 작업중인 브랜치에서 미리 해결하고 진행한다.

- PR생성시 예시

  - PR 제목

  | 생성 목적 | PR 제목                                 |
  | --------- | --------------------------------------- |
  | 기능 개발 | [Feature] [{sprint_name}]:{issue_name}  |
  | 버그 픽스 | [Fix] [{sprint_name}]:{issue_name}      |
  | 코드 개선 | [Refactor] [{sprint_name}]:{issue_name} |

  - PR 설명

  ```
  - Feature:
   - 개발내용
  - Notes:
    - PR리뷰시 주의할점, 추가 전달사항
  ```

**4. 리뷰 & 토의**

- 리뷰와 토의를 상세하게 진행하여 이후 해당 PR이 main으로 merge될 때 문제가 없도록 한다.
